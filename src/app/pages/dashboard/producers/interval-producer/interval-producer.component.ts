import { Component, Input } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  previous: number;
  following: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', previous: 2002, following: 2015}
];

@Component({
  selector: 'app-interval-producer',
  templateUrl: './interval-producer.component.html',
  styleUrls: ['./interval-producer.component.scss']
})
export class IntervalProducerComponent {
  @Input() type = 'min' || 'max';

  constructor() { }

  displayedColumns: string[] = ['position', 'name', 'previous', 'following'];
  dataSource = ELEMENT_DATA;

  getDescription(): string {
    return this?.type == 'min' ? 'Minimum' : 'Maximum';
  }

}
