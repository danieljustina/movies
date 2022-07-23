import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Producer } from './models/producer';

@Component({
  selector: 'app-interval-producer',
  templateUrl: './interval-producer.component.html',
  styleUrls: ['./interval-producer.component.scss']
})
export class IntervalProducerComponent {
  @Input() type = 'min' || 'max';
  @Input() dataSource: MatTableDataSource<Producer>;

  displayedColumns: string[] = ['producer', 'interval', 'previousWin', 'followingWin'];

  constructor() { 
    this.dataSource = new MatTableDataSource();
  }

  getDescription(): string {
    return this?.type == 'min' ? 'Minimum' : 'Maximum';
  }

}
