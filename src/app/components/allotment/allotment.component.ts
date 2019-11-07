import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-allotment',
  templateUrl: './allotment.component.html',
  styleUrls: ['./allotment.component.css']
})
export class AllotmentComponent implements OnInit {

  constructor(private manager: ManagerService) { }

  users;
  courses;
  registeredCourses: string[];
  validCourses;
  checkedCourses: string[];
  activeUser;

  ngOnInit() {
    this.users = this.manager.getUsers()
    this.courses = this.manager.getCourses()
    this.registeredCourses = [];
    this.validCourses = [];
    this.checkedCourses = [];
  }

  userActive(user) {
    this.activeUser = user;
    //console.log(user.id, user.name_of_person)
    this.registeredCourses = []
    for (let c of user.courses) {
      this.registeredCourses.push(c.name_of_course)
    }
    this.valid()
    //console.log("active user", this.activeUser.name_of_person, "checked", this.checkedCourses, "registered", this.registeredCourses, "valid", this.validCourses)
  }

  isDisabled(course) {
    return this.registeredCourses.includes(course.name_of_course)
  }

  check(j, checked) {
    if (checked) {
      this.checkedCourses.push(this.courses[j].name_of_course)
    }
    else {
      let index = this.checkedCourses.indexOf(this.courses[j].name_of_course);
      if (index > -1) {
        this.checkedCourses.splice(index, 1);
      }
    }
    this.valid()
    //console.log("active user", this.activeUser.name_of_person, "checked", this.checkedCourses, "registered", this.registeredCourses, "valid", this.validCourses)
  }

  classes() {
    return {
      'btn-large waves-effect waves-light modal-trigger': true,
      'disabled': !this.validCourses.length
    }
  }

  valid() {
    this.validCourses = []
    for (let course of this.courses) {
      if (this.checkedCourses.includes(course.name_of_course) && !this.registeredCourses.includes(course.name_of_course)) {
        this.validCourses.push(course)
      }
    }
  }

  prepare() {
    let data = [];
    for (let c of this.validCourses) {
      data.push({
        userId: this.activeUser.id,
        courseId: c.id
      })
    }
    //console.log("prepare", data)
    this.manager.prepare({
      url: 'allot',
      data: data
    })
  }

}
