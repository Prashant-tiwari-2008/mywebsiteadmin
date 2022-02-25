import { Component, OnInit } from '@angular/core';
import { AngularFireList } from '@angular/fire/compat/database';
import { Project } from 'src/app/core/models/project.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {

  // public projectList$: AngularFireList<any>
  public projectList$: any

  constructor(private _projectService: ProjectService<Project>) { }

  ngOnInit(): void {
    this.projectlist();
  }

  /**
   * getting Project List
   */
  projectlist() {
    this._projectService.projectList$.snapshotChanges().subscribe((actionArray) => {
      this.projectList$ = actionArray.map(item => {
        const data = item.payload.val();
        const id = item.payload.key;
        return { id, ...data };
      })
      console.log('this.payload',this.projectList$)
    })
  }

  removeitem(id: string) {
    this._projectService.removeProject(id);
  }

}
