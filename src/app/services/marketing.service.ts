import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Product } from "../interfaces/product";
import { Client } from "../interfaces/client";

@Injectable({
    providedIn: 'root'
})
export class MarketingService {
    private url = environment.API_URL;

    constructor(private http: HttpClient) { }

    getProducts(): Observable<Array<Product>> {
        return this.http.get<Array<Product>>(this.url + "api/products/");
    }

    getClients(): Observable<Array<Client>> {
        return this.http.get<Array<Client>>(this.url + "api/clients/");
    }
}