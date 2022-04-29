import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersBDComponent } from './orders-bd.component';

describe('OrdersBDComponent', () => {
  let component: OrdersBDComponent;
  let fixture: ComponentFixture<OrdersBDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersBDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersBDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
