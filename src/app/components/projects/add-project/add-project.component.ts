import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { async } from '@firebase/util';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { finalize } from 'rxjs/operators';
import { Entities } from 'src/app/core/models/entites.model';
import { FileUpload } from 'src/app/core/models/file-upload';
import { Project } from 'src/app/core/models/project.model';
import { ImageUploadService } from 'src/app/services/image-upload.service';
import { ProjectService } from 'src/app/services/project.service';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  selectedFiles?: FileList | undefined;
  currentFileUpload?: FileUpload;
  public ProjectForm = new FormGroup({});
  public Submitted: boolean = false;
  public percentage: number | undefined = 0;
  public message: string = ""
  public imagePath: string = ""
  public imgURL: string | ArrayBuffer | null = ""
  public url: string = '';
  public fileUpload: string = ''
  //configuration of angular editor
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '10rem',
    minHeight: '8rem',
  }

  constructor(private _fb: FormBuilder, private storage: AngularFireStorage,
    private _imageUploadService: ImageUploadService,
    private spinner: NgxSpinnerService,
    private _projectService: ProjectService<any>) { }


  ngOnInit(): void {
    this.ProjectFormData()
  }

  /**
   * @param event 
   * @returns 
   * Selecting image from localStorage
   */
  public selectFile(event: any): void {
    this.selectedFiles = event.target.files;
    if (event.target.files.length === 0)
      return;

    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
    var reader = new FileReader();
    this.imagePath = event.target.files;
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }

  /**
   * Deleting the preview image before sending to firebase storage
   */
  public RemoveImage(): void {
    this.message = '';
    this.imagePath = '';
    this.imgURL = ''
  }

  /**
   * Getting from value
   */
  private ProjectFormData(): void {
    this.ProjectForm = this._fb.group({
      ProjectName: ['', Validators.required],
      ProjectTechnologies: ['', Validators.required],
      ProjectUrl: ['', Validators.required],
      ProjectIndex: ['', Validators.required],
      ProjectEditor: ['', Validators.required],
    })
  }

  /**
   * @param ProjectFormValue 
   * Getting the image url from image-upload service
   * attaching url to form data and send to 
   * add create project method
   */
  public onSubmit(ProjectFormValue: any): void {
    if (ProjectFormValue.valid == true) {
      this.Submitted = true;
    }
    if (this.selectedFiles) {
      this.spinner.show();
      const file = this.selectedFiles.item(0);
      var filepath = `${Entities.Upload}${`/project/`}${file!.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`
      const fileRef = this.storage.ref(filepath)
      this._imageUploadService.pushFileToStorage(filepath, file).subscribe((res: any) => {
        if (res) {
          fileRef.getDownloadURL().subscribe((downloadURL) => {
            this.fileUpload = downloadURL;
            console.log("this file ulr", this.fileUpload);
            this._projectService.create({ ...ProjectFormValue.value, imageUrl: this.fileUpload })
            this.spinner.hide();
          })
        }
      })
    }
  }

}
