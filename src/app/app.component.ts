import { ManagerService } from './services/manager.service';
import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var M: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private manager: ManagerService) { }

  ngOnInit() {
    // materialize function(s)
    (function ($) {
      $(function () {
        //console.log("Hello from jQuery!");
        $(".dropdown-trigger").dropdown();
        $('.modal').modal();
        //M.toast({html: 'I am a toast!', classes: 'rounded'})
      });
    })(jQuery);

    //refresh service
    this.manager.refresh()
    //M.toast({html: 'I am a toast!'})
  }

  title: string = 'course-manager';
  page: number = 0;
  head: string = "Home"

  toggle(n) {
    this.page = n;
    switch (n) {
      case 1:
        this.head = "Add User"
        break;
      case 2:
        this.head = "List of Users"
        break;
      case 3:
        this.head = "Add Course"
        break;
      case 4:
        this.head = "List of Course"
        break;
      case 5:
        this.head = "Course Allotment"
        break;
      default:
        this.head = "Home"

      // code block
    }
  }

  submit() {
    this.manager.submit()
      .subscribe((data) => {
        this.manager.refresh();
        //console.log(data, "refreshed")

        this.manager.request = {
          url: "",
          data: {}
        }

        //console.log("subscribe data:", data)

        this.toggle(0);

        if (data.success)
          M.toast({ html: 'Request Successful!' })
        else
          M.toast({ html: 'Request Fail!<br>' + data.msg.errors[0].message })

      })

  }

  details() {
    return ""
  }

}
