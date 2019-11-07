import { Component, OnInit, Input } from '@angular/core';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-user-subitem',
  templateUrl: './user-subitem.component.html',
  styleUrls: ['./user-subitem.component.css']
})
export class UserSubitemComponent implements OnInit {

  constructor(private manager: ManagerService) { }

  @Input() user;
  @Input() index: number;
  @Input() courseid: number;

  ngOnInit() {
  }

  prepare() {
    let data = {
      userId: this.user.id,
      courseId: this.courseid
    }
    //console.log("preparing",data)
    this.manager.prepare({
      url: "d/allot",
      data: data
    })
  }

}
