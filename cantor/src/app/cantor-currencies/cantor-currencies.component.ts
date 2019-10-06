import { Component, OnInit, Input } from '@angular/core';
import { CantorCurrency } from '../_models/cantor-currency';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cantor-currencies',
  templateUrl: './cantor-currencies.component.html',
})
export class CantorCurrenciesComponent implements OnInit {
  @Input() cantorCurrencies: Observable<Array<CantorCurrency>>;

  constructor() { }

  ngOnInit() {
  }

}
