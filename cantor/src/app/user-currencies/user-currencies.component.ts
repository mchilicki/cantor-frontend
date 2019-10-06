import { Component, OnInit, Input } from '@angular/core';
import { User } from '../_models';

@Component({
  selector: 'app-user-currencies',
  templateUrl: './user-currencies.component.html',
})
export class UserCurrenciesComponent implements OnInit {
  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
