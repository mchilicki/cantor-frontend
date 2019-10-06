export class BaseHttpService {
    protected baseUrl: string;

    constructor() {
        this.baseUrl = 'https://localhost:44393/api';
    }
}
