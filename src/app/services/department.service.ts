import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../interfaces/user";
import { environment } from "src/environments/environment";
import { Department } from "../interfaces/department";

@Injectable({
    providedIn: 'root'
})
export class DepartmentService {
    private departmentsUrl = environment.API_URL + "api/departments/";

    constructor(private http: HttpClient) { }

    getDepartments(): Observable<Array<Department>> {
        return this.http.get<Array<Department>>(this.departmentsUrl);
    }
}