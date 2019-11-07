import { Component, OnInit, Input } from '@angular/core';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-course-subitem',
  templateUrl: './course-subitem.component.html',
  styleUrls: ['./course-subitem.component.css']
})
export class CourseSubitemComponent implements OnInit {

  @Input() course;
  @Input() index: number;
  @Input() userid: number;

  constructor(private manager: ManagerService) { }

  ngOnInit() {
  }

  prepare() {
    let data = {
      userId: this.userid,
      courseId: this.course.id
    }
    //console.log("preparing",data)
    this.manager.prepare({
      url: "d/allot",
      data: data
    })
  }

}
