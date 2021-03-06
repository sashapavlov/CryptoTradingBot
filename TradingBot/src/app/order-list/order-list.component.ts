import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Order } from '../data-model';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  @Input() set orders(value: Order[]) {
    this.dataSource.data = value;
  }

  displayedColumns = [
    'datetime',
    'status',
    'symbol',
    'type',
    'side',
    'price',
    'cost',
    'amount',
    'filled',
    'remaining',
    'fee'
  ];

  dataSource = new MatTableDataSource<Order>();

  constructor() { }

  ngOnInit() {
  }
}
