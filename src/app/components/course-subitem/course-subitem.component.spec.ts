import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSubitemComponent } from './course-subitem.component';

describe('CourseSubitemComponent', () => {
  let component: CourseSubitemComponent;
  let fixture: ComponentFixture<CourseSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
