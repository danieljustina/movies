import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { ListMoviesYearService } from './list-movies-year.service';
import { MoviesYear } from './models/movies-year';

@Component({
  selector: 'app-list-movies-year',
  templateUrl: './list-movies-year.component.html',
  styleUrls: ['./list-movies-year.component.scss']
})
export class ListMoviesYearComponent {
  searchControl: FormControl;
  dataSource: MatTableDataSource<MoviesYear>;
  displayedColumns: string[] = ['id', 'year', 'title'];
  minYearSearch = 1900;

  constructor(
    private _toastr: ToastrService,
    private _listMoviesYearService: ListMoviesYearService
  ) {
    this.searchControl = new FormControl('',
      [Validators.required, Validators.minLength(4), Validators.min(this.minYearSearch)]
    );
    this.dataSource = new MatTableDataSource();
  }

  onSearch() {
    this._listMoviesYearService.getMovieWinner(this.searchControl.value)
      .subscribe({
        next: (res: MoviesYear[]) => {
          if (res && res.length > 0) {
            this.dataSource = new MatTableDataSource(res);
            return;
          }
          this.dataSource = new MatTableDataSource();
          this._toastr.warning('Nenhum registro encontrado para o ano informado!');
        },
        error: () => this._toastr.error('Erro ao buscar registros!')
      })
  }
}
