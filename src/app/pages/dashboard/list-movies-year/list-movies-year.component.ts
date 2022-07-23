import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface PeriodicElement {
  name: string;
  position: number;
  title: string;
}

const ELEMENT_DATA: PeriodicElement[] = [

];


@Component({
  selector: 'app-list-movies-year',
  templateUrl: './list-movies-year.component.html',
  styleUrls: ['./list-movies-year.component.scss']
})
export class ListMoviesYearComponent  {
  searchControl: FormControl;

  constructor() {
    this.searchControl = new FormControl('');
  }

  displayedColumns: string[] = ['position', 'name', 'title'];
  dataSource = ELEMENT_DATA;

  onSearch() {
    console.log(this.searchControl.value);
  }
}
