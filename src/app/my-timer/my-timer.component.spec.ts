import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTimerComponent } from './my-timer.component';

describe('MyTimerComponent', () => {
  let component: MyTimerComponent;
  let fixture: ComponentFixture<MyTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
