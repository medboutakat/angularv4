import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedtopbarComponent } from './fixedtopbar.component';

describe('FixedtopbarComponent', () => {
  let component: FixedtopbarComponent;
  let fixture: ComponentFixture<FixedtopbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedtopbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedtopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
