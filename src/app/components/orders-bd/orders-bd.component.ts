import { Component, OnInit } from '@angular/core';
import { BDDataService } from 'src/app/services/bd-data.service';

@Component({
  selector: 'app-orders-bd',
  templateUrl: './orders-bd.component.html',
  styleUrls: ['./orders-bd.component.css']
})
export class OrdersBDComponent implements OnInit {
  public items$: any;
  constructor(private service: BDDataService) { }

  ngOnInit() {
    this.getAll();
  }

  /*getAll() {
    this.service.getAll().subscribe((response) => {
      this.items$ = response;
    })
  }*/

  getAll() {
    this.service.getAll().subscribe({
      next: (res) => { this.items$  = res; console.log(this.items$) },
      error: (err) => { console.log(err) },
      complete: () => { console.log('complete') }

    })
  }

}
