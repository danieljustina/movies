import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { IntervalProducerService } from './interval-producer/interval-producer.service';
import { IntervalProducer } from './interval-producer/models/interval-producer';
import { Producer } from './interval-producer/models/producer';

@Component({
  selector: 'app-producers',
  templateUrl: './producers.component.html',
  styleUrls: ['./producers.component.scss']
})
export class ProducersComponent implements OnInit {
  dataSourceMax: MatTableDataSource<Producer>;
  dataSourceMin: MatTableDataSource<Producer>;

  constructor(
    private _intervalProducerService: IntervalProducerService,
    private _toastr: ToastrService
  ) {
    this.dataSourceMin = new MatTableDataSource();
    this.dataSourceMax = new MatTableDataSource();
   }

  ngOnInit(): void {
    this.getProducers();
  }

  getProducers() {
    this._intervalProducerService.getIntervalProducers()
      .subscribe({
        next: (res: IntervalProducer) => {
          this.dataSourceMin = new MatTableDataSource(res.min);
          this.dataSourceMax = new MatTableDataSource(res.max);
        },
        error: () => this._toastr.error('Erro ao buscar registros!')
      });
  }
  
}
