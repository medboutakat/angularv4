import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildeditComponent } from './childedit.component';

describe('ChildeditComponent', () => {
  let component: ChildeditComponent;
  let fixture: ComponentFixture<ChildeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
