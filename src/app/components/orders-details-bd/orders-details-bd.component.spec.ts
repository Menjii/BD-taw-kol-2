import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailsBDComponent } from './orders-details-bd.component';

describe('OrdersDetailsBDComponent', () => {
  let component: OrdersDetailsBDComponent;
  let fixture: ComponentFixture<OrdersDetailsBDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersDetailsBDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailsBDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
