// Angular Modules
import { Injectable } from '@angular/core';
@Injectable()
export class Constants {
    public readonly API_DOOR: string = "9001";
    public readonly API_ENDPOINT: string =  `http://localhost:${this.API_DOOR}`;
    public readonly API_MOCK_ENDPOINT: string = `http://localhost:${this.API_DOOR}`;
}
