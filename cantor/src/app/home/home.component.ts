import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    user: User;

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.loading = true;
        this.userService.getUser().subscribe((user: User) => {
            this.loading = false;
            this.user = user;
        });
    }
}
