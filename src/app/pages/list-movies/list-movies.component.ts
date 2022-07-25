import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Table } from 'src/app/components/table/models/table';
import { ListMoviesService } from './list-movies.service';
import { Movie } from './models/movie';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource: MatTableDataSource<Movie>;
  table: Table[] = [
    {name: 'id', description: 'ID'}, 
    {name: 'year', description: 'Year', search: {type: 'number'}}, 
    {name: 'title', description: 'Title'}, 
    {name: 'winner', description: 'Winner?', search: {type: 'select'}}
  ];
  totalRows = 0;
  pageSize = 5;
  currentPage = 0;
  winnerSearch!: boolean;
  yearSearch!: number | undefined;

  constructor(
    private _listMoviesService: ListMoviesService,
    private _toastr: ToastrService
  ) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.getWinnersYear();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getWinnersYear() {
    this._listMoviesService.getWinnersYear(this.currentPage, this.pageSize, this.winnerSearch, this.yearSearch)
      .subscribe({
        next: (res: any) => {
          this.dataSource = new MatTableDataSource(res.content);
          this.currentPage = res.number;
          this.totalRows = res.totalElements;
          setTimeout(() => {
            this.paginator.pageIndex = this.currentPage;
            this.paginator.length = this.totalRows;
          })
        },
        error: () => this._toastr.error('Erro ao buscar registros!')
      });
  }

  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getWinnersYear();
  }

  dataSearch(data: any) {
    if (!isNaN(data)) {
      this.yearSearch = Number(data);
    } else {
      this.winnerSearch = data;
    }
    this.getWinnersYear();
  }

}
