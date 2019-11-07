import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSubitemComponent } from './user-subitem.component';

describe('UserSubitemComponent', () => {
  let component: UserSubitemComponent;
  let fixture: ComponentFixture<UserSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
