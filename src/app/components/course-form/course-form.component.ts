import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  constructor(private manager: ManagerService) { }

  ngOnInit() {
  }
  minLength: number = 3;
  maxLength: number = 50;

  prepare(coursename, date, duration, fee) {
    let data = {
      name_of_course: coursename.value,
      course_duration: duration.value,
      course_fee: fee.value,
      start_date: date.value
    }
    //console.log("prepare", data)
    this.manager.prepare({
      url: 'course',
      data: data
    })
  }

  classes(coursename, date, duration, fee) {
    return {
      'btn waves-effect waves-light modal-trigger': true,
      'disabled': !(coursename.valid && date.valid && duration.valid && fee.valid && duration.value <= 24 && duration.value >= 0 && fee.value <= 50000 && fee.value >= 0)
    }
  }

}
