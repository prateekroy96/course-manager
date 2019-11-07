import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor(private manager: ManagerService) { }

  ngOnInit() {
  }

  minLength: number = 3;
  maxLength: number = 50;

  prepare(username, college, phone, year) {
    let data = {
      name_of_person: username.value,
      contact_number: phone.value,
      name_of_college: college.value,
      graduation_year: year.value
    }
    //console.log("prepare",data)
    this.manager.prepare({
      url: 'user',
      data: data
    })
  }

  classes(username, college, phone, year) {
    return {
      'btn waves-effect waves-light modal-trigger': true,
      'disabled': !(username.valid && college.valid && phone.valid && year.valid && year.value <= 2019 && year.value >= 1950)
    }
  }
}
