import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupcastingComponent } from './setupcasting.component';

describe('SetupcastingComponent', () => {
  let component: SetupcastingComponent;
  let fixture: ComponentFixture<SetupcastingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupcastingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupcastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
