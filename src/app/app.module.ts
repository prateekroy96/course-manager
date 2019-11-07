import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AllotmentComponent } from './components/allotment/allotment.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { CourseSubitemComponent } from './components/course-subitem/course-subitem.component';
import { UserSubitemComponent } from './components/user-subitem/user-subitem.component';


@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    CourseFormComponent,
    CourseListComponent,
    UserListComponent,
    AllotmentComponent,
    UserItemComponent,
    CourseItemComponent,
    CourseSubitemComponent,
    UserSubitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    //MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
