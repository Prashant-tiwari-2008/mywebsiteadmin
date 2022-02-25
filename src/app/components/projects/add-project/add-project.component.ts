import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { finalize } from 'rxjs/operators';
import { FileUpload } from 'src/app/core/models/file-upload';
import { Project } from 'src/app/core/models/project.model';
import { ImageUploadService } from 'src/app/services/image-upload.service';
import { ProjectService } from 'src/app/services/project.service';


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
  public imgURL: any = ""
  public url: any = '';
  //configuration of angular editor
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '10rem',
    minHeight: '8rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
    ],
  }

  constructor(private _fb: FormBuilder, private _imageUploadService: ImageUploadService, private _projectService: ProjectService<any>) { }


  ngOnInit(): void {
    this.ProjectFormData()
  }

  selectFile(event: any): void {
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


  RemoveImage() {
    this.message = '';
    this.imagePath = '';
    this.imgURL = ''
  }

  // uploadImage() {
  //   if (this.selectedFiles) {
  //     const file = this.selectedFiles.item(0);
  //     this.selectedFiles = undefined
  //     if (file) {
  //       this.currentFileUpload = new FileUpload(file)
  //       this._imageUploadService.pushFileToStorage(this.currentFileUpload).subscribe((percentage: number | undefined) => {
  //         this.percentage = percentage
  //       }, error => {
  //         console.log("error in uploading file", error)
  //       }), (err: any) => {
  //         console.log(err.error.msg)
  //       }
  //     }
  //   }
  // }

  private ProjectFormData(): void {
    this.ProjectForm = this._fb.group({
      ProjectName: ['', Validators.required],
      ProjectTechnologies: ['', Validators.required],
      ProjectUrl: ['', Validators.required],
      ProjectIndex: ['', Validators.required],
      ProjectEditor: ['', Validators.required],
    })
  }

  onSubmit(ProjectFormValue: any) {
    if (ProjectFormValue.valid == true) {
      this.Submitted = true;
    }
    debugger
    if (this.selectedFiles) {
      const file = this.selectedFiles.item(0);
      this.url = this._imageUploadService.pushFileToStorage(file);
      console.log("this url",this.url)
      if (this.url !== undefined) {
        // this._projectService.create({ ...ProjectFormValue.value, imageUrl: this.url });
        // this.ProjectForm.reset();
      }else{
        alert("image uploading taking tim")
      }

    }
  }
}
