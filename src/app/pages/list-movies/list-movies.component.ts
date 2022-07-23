import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
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
  displayedColumns: string[] = ['id', 'year', 'title', 'winner'];
  totalRows = 0;
  pageSize = 5;
  currentPage = 0;

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
    this._listMoviesService.getWinnersYear(this.currentPage, this.pageSize)
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


}
