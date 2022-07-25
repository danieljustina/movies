import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Table } from 'src/app/components/table/models/table';
import { Producer } from './models/producer';

@Component({
  selector: 'app-interval-producer',
  templateUrl: './interval-producer.component.html',
  styleUrls: ['./interval-producer.component.scss']
})
export class IntervalProducerComponent {
  @Input() type = 'min' || 'max';
  @Input() dataSource: MatTableDataSource<Producer>;

  table: Table[] = [
    {name: 'producer', description: 'Producer'}, 
    {name: 'interval', description: 'Interval'}, 
    {name: 'previousWin', description: 'Previous Year'}, 
    {name: 'followingWin', description: 'Following Year'}
  ];

  constructor() { 
    this.dataSource = new MatTableDataSource();
  }

  getDescription(): string {
    return this?.type == 'min' ? 'Minimum' : 'Maximum';
  }

}
