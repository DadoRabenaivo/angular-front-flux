import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../interfaces/user";
import { environment } from "src/environments/environment";
import { Equipment } from "../interfaces/equipment";

@Injectable({
    providedIn: 'root'
})
export class EquipmentService {
    private endpoint = environment.API_URL + "api/equipments/";

    constructor(private http: HttpClient) { }

    getEquipments(): Observable<Array<Equipment>> {
        return this.http.get<Array<Equipment>>(this.endpoint);
    }
}