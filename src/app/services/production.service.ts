import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../interfaces/user";
import { environment } from "src/environments/environment";
import { Department } from "../interfaces/department";
import { ProdProcess } from "../interfaces/prodProcess";

@Injectable({
    providedIn: 'root'
})
export class ProductionService {
    private productsUrl = environment.API_URL + "api/products/";

    constructor(private http: HttpClient) { }

    getProductProcesses(): Observable<Array<ProdProcess>> {
        return this.http.get<Array<ProdProcess>>(`${this.productsUrl}?viewFor=production`);
    }
}