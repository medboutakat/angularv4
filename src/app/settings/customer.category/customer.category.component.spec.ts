import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCategoryComponent } from './customer.category.component';

describe('VatComponent', () => {
  let component: CustomerCategoryComponent;
  let fixture: ComponentFixture<CustomerCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
