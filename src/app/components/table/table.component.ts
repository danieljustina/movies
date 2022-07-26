import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Table } from './models/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input() table!: Table[];
  @Input() dataSource!: MatTableDataSource<any>;
  @Output() dataSearch: EventEmitter<string> = new EventEmitter();

 
  get displayedColumns() {
    return this.table?.map(res => res.name);
  }

  onChangeSearch(event: any) {
    this.dataSearch.emit(event);
  }

  onChangeInputSearch(event: any) {
    this.dataSearch.emit(event?.target?.value);
  }
}
