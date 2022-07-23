import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Studio } from './models/studio';
import { TopStudiosService } from './top-studios.service';

@Component({
  selector: 'app-top-studios',
  templateUrl: './top-studios.component.html',
  styleUrls: ['./top-studios.component.scss']
})
export class TopStudiosComponent implements OnInit {
  dataSource: MatTableDataSource<Studio>;
  displayedColumns: string[] = ['name', 'winCount'];
  COUNT_TOP_STUDIOS = 3;

  constructor(
    private _topStudiosService: TopStudiosService,
    private _toastr: ToastrService
  ) {
    this.dataSource = new MatTableDataSource();
   }

  ngOnInit(): void {
    this.getStudios();
  }

  getStudios() {
    this._topStudiosService.getStudios()
      .subscribe({
        next: (res: Studio[]) => {
          this.dataSource = new MatTableDataSource(this.filterStudios(res));
        },
        error: () => this._toastr.error('Erro ao buscar registros!')
      });
  }

  filterStudios(studios: Studio[]): Studio[] {
    return studios.slice(0, (this.COUNT_TOP_STUDIOS));
  }
}
