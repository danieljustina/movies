import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(
    private _router: Router
  ) { }

  onDashboard() {
    this._router.navigate(['dashboard']);
  }

  onList() {
    this._router.navigate(['movies']);
  }

}
