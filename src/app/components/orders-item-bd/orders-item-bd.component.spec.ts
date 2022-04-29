import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemBDComponent } from './orders-item-bd.component';

describe('OrdersItemBDComponent', () => {
  let component: OrdersItemBDComponent;
  let fixture: ComponentFixture<OrdersItemBDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersItemBDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemBDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
