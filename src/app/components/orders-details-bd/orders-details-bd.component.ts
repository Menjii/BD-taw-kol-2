import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BDDataService } from 'src/app/services/bd-data.service';

@Component({
  selector: 'app-orders-details-bd',
  templateUrl: './orders-details-bd.component.html',
  styleUrls: ['./orders-details-bd.component.css']
})
export class OrdersDetailsBDComponent implements OnInit {
  public item: any;

  constructor(private service: BDDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id: string = '';
    this.route.paramMap.subscribe((params: any) => {
      id = params.get('id');
    });

    this.service.getById(id).subscribe((res: any) => {
      this.item = res;
    })
  }

}
