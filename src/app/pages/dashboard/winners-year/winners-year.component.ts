import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen'},
  {position: 2, name: 'Helium'},
  {position: 3, name: 'Lithium'},
  {position: 4, name: 'Beryllium'},
  {position: 5, name: 'Boron'},
  {position: 6, name: 'Carbon'},
  {position: 7, name: 'Nitrogen'},
  {position: 8, name: 'Oxygen'},
  {position: 9, name: 'Fluorine'},
  {position: 10, name: 'Neon'},
];



@Component({
  selector: 'app-winners-year',
  templateUrl: './winners-year.component.html',
  styleUrls: ['./winners-year.component.scss']
})
export class WinnersYearComponent {

  displayedColumns: string[] = ['position', 'name'];
  dataSource = ELEMENT_DATA;

}
