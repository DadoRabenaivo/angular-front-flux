import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Request } from "../interfaces/request";

@Injectable({
    providedIn: 'root'
})
export class MessagingService {
    private messagingUrl = environment.API_URL + "api/requests";

    constructor(private http: HttpClient) { }
    
    sendRequest(request : Request): Observable<any> {
        return this.http.post<any>(`${this.messagingUrl}`, request);
    }
}