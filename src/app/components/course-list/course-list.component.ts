import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/services/manager.service';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses;
  constructor(private manager: ManagerService) { }

  ngOnInit() {
    this.courses = this.manager.getCourses()
    //console.log("in user list",this.courses)
  }

}
