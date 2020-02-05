import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupvoteComponent } from './setupvote.component';

describe('SetupvoteComponent', () => {
  let component: SetupvoteComponent;
  let fixture: ComponentFixture<SetupvoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupvoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupvoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
