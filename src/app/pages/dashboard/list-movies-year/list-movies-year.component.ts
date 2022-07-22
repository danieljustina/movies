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
  selector: 'app-list-movies-year',
  templateUrl: './list-movies-year.component.html',
  styleUrls: ['./list-movies-year.component.scss']
})
export class ListMoviesYearComponent  {

  constructor() { }

  displayedColumns: string[] = ['position', 'name'];
  dataSource = ELEMENT_DATA;

}
