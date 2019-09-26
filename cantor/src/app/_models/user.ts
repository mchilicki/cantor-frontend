import { UserCurrency } from './user-currency';

export interface User {
    id: number;
    login: string;
    firstName: string;
    lastName: string;
    money: number;
    token?: string;
    currencies: Array<UserCurrency>;
}