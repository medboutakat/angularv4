import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCodeNameSettingsComponent } from './edit-code-name-settings.component';

describe('EditCodeNameSettingsComponent', () => {
  let component: EditCodeNameSettingsComponent;
  let fixture: ComponentFixture<EditCodeNameSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCodeNameSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCodeNameSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
