import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../interfaces/user";
import { environment } from "src/environments/environment";
import { Equipment } from "../interfaces/equipment";

@Injectable({
    providedIn: 'root'
})
export class LogistiqueService {
    private url = environment.API_URL;

    constructor(private http: HttpClient) { }

    getEquipments(): Observable<Array<Equipment>> {
        return this.http.get<Array<Equipment>>(this.url + "api/equipments/");
    }
}