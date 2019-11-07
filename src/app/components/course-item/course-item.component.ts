import { Component, OnInit, Input } from '@angular/core';
import { ManagerService } from 'src/app/services/manager.service';

declare var jQuery: any;

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {

  constructor(private manager: ManagerService) { }

  @Input()course;

  ngOnInit() {
    (function ($) {
      $(function(){
        $('.collapsible').collapsible();
      });
    })(jQuery);
  }

  prepare() {
    let data = {id: this.course.id}
    //console.log("prepare",data)
    this.manager.prepare({
      url: 'd/course',
      data: data
    })
  }

}
