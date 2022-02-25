import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Entities } from '../core/models/entites.model';
import { Project } from '../core/models/project.model';
import { CREATED, DELETED } from '../_helper/messages';

@Injectable({
  providedIn: 'root'
})
export class ProjectService<T> {

  public ImageUrl: string = ''
  public ImageName: string = ''
  public projectList$: AngularFireList<any>


  constructor(private _firebase: AngularFireDatabase,
    private _router: Router,
    private toastr: ToastrService,
  ) {
    /**
    * @readAll
    * projectList can read all the project details from firebase
    */
    this.projectList$ = this._firebase.list(Entities.Project)
  }

  /**
   * @create
   * @param project
   * Adding project to firebase realtime database
   */
  create(Project: Project) {
    this.projectList$.push(Project);
    this.toastr.success(CREATED)
    this._router.navigateByUrl("projects/viewProject");
  }

  /**
   * 
   * @delete
   * @param id
   * Deleting a banner from firebase realtime database according to given id.
   */
  removeProject(id: string) {
    this._firebase.list(Entities.Project).remove(id)
    this.toastr.success(DELETED);
  }

}

