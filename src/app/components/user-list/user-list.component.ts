import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/services/manager.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {

  users;

  constructor(private manager: ManagerService) { }

  ngOnInit() {
    this.users = this.manager.getUsers()
    //console.log("in user list",this.users)
  }

}
