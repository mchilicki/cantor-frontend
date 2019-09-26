import { BaseHttpService } from './base-http.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService extends BaseHttpService {


    constructor(private http: HttpClient) {
        super();
    }

    getUser(): Observable<User> {
        return this.http.get<User>(this.baseUrl + `/currencies/user`);
    }
}
