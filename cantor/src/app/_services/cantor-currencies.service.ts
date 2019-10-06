import { BaseHttpService } from './base-http.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CantorCurrency } from '../_models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CantorCurrenciesService extends BaseHttpService {


    constructor(private http: HttpClient) {
        super();
    }

    getCantorCurrencies(): Observable<Array<CantorCurrency>> {
        return this.http.get<Array<CantorCurrency>>(this.baseUrl + `/currencies/cantor`);
    }
}
