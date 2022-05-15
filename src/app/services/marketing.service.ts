import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Client } from "../interfaces/client";
import { ProductDetail } from "../interfaces/productDetail";

@Injectable({
    providedIn: 'root'
})
export class MarketingService {
    private url = environment.API_URL;

    constructor(private http: HttpClient) { }

    getProducts(): Observable<Array<ProductDetail>> {
        return this.http.get<Array<ProductDetail>>(this.url + "api/products/");
    }

    getClients(): Observable<Array<Client>> {
        return this.http.get<Array<Client>>(this.url + "api/clients/");
    }
}