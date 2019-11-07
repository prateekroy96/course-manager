import { Component, OnInit, Input } from '@angular/core';
import { ManagerService } from 'src/app/services/manager.service';

declare var jQuery: any;

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  constructor(private manager: ManagerService) { }

  @Input()user;

  ngOnInit() {
    (function ($) {
      $(function(){
        $('.collapsible').collapsible();
      });
    })(jQuery);
  }

  prepare() {
    let data = {id: this.user.id}
    //console.log("prepare",data)
    this.manager.prepare({
      url: 'd/user',
      data: data
    })
  }
}
