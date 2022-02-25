import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators'
import { FileUpload } from '../core/models/file-upload'
import { ProjectService } from './project.service';
import { Project } from '../core/models/project.model';
import { SUCCESS } from '../_helper/constants';
import { Entities } from '../core/models/entites.model';
import { async } from '@angular/core/testing';
@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {
  ImageUploadPercent: number = 0;
  imageURL: string = '';
  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage, private _projectService: ProjectService<Project>) { }

  async pushFileToStorage(fileUpload: any) {
    var filepath = `${Entities.Upload}${`/project/`}${fileUpload!.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`
    const fileRef = this.storage.ref(filepath)
    await this.storage.upload(filepath, fileUpload.file).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((downloadURL) => {
          this.imageURL = downloadURL;
          console.log("image url", this.imageURL)
        });
      })
    )
    return this.imageURL
    
  }

  // pushFileToStorage(fileUpload: any): Observable<number> {
  //   // const filePath = `${this.basePath}/${fileUpload.file.name}`;
  //   debugger
  //   var filepath = `${Entities.Upload}${`/project/`}${fileUpload!.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`
  //   const storageRef = this.storage.ref(filepath);
  //   const uploadTask = this.storage.upload(filepath, fileUpload.file);
  //   uploadTask.snapshotChanges().pipe(
  //     finalize(() => {
  //       storageRef.getDownloadURL().subscribe(downloadURL => {
  //         fileUpload.url = downloadURL;
  //         fileUpload.name = fileUpload.file.name;
  //         console.log("this file ulr",fileUpload.url);
  //       });
  //     })
  //   ).subscribe();
  //   return uploadTask.percentageChanges();
  // }
} 