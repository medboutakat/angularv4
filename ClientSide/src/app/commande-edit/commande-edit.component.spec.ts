import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeEditComponent } from './commande-edit.component';

describe('CommandeEditComponent', () => {
  let component: CommandeEditComponent;
  let fixture: ComponentFixture<CommandeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
