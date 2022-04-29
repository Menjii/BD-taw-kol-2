import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-item-bd',
  templateUrl: './orders-item-bd.component.html',
  styleUrls: ['./orders-item-bd.component.css']
})
export class OrdersItemBDComponent implements OnInit {
  @Input() data?:string;
  @Input() id?:number;
  @Input() text?:string;
  @Input() title?:string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
