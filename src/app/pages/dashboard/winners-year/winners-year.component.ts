import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { WinnerYear } from './models/winner-year';
import { WinnersYearService } from './winners-year.service';

@Component({
  selector: 'app-winners-year',
  templateUrl: './winners-year.component.html',
  styleUrls: ['./winners-year.component.scss']
})
export class WinnersYearComponent implements OnInit {
  dataSource: MatTableDataSource<WinnerYear>;
  displayedColumns: string[] = ['year', 'winnerCount'];

  constructor(
    private _winnersYearService: WinnersYearService,
    private _toastr: ToastrService
  ) {
    this.dataSource = new MatTableDataSource();
   }

   ngOnInit(): void {
    this.getWinnersYear();
  }

  getWinnersYear() {
    this._winnersYearService.getWinnersYear()
      .subscribe({
        next: (res: WinnerYear[]) => {
          this.dataSource = new MatTableDataSource(res);
        },
        error: () => this._toastr.error('Erro ao buscar registros!')
      });
  }

}
