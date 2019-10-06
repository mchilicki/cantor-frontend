import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User, CantorCurrency } from '../_models';
import { UserService, AuthenticationService } from '../_services';
import { Observable } from 'rxjs';
import { CantorCurrenciesService } from '../_services/cantor-currencies.service';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    user: User;
    cantorCurrencies: Array<CantorCurrency>;

    constructor(
        private userService: UserService,
        private cantorCurrenciesService: CantorCurrenciesService) {
    }

    ngOnInit() {
        this.loading = true;
        this.userService.getUser().subscribe((user: User) => {
            this.loading = false;
            this.user = user;
        });
        this.cantorCurrenciesService.getCantorCurrencies().subscribe(
            (cantorCurrencies: Array<CantorCurrency>) => {
                this.cantorCurrencies = cantorCurrencies;
            });
    }
}
