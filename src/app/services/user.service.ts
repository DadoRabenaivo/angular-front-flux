import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../interfaces/user";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private usersUrl = environment.API_URL + "api/users/";
    public authenticatedUser ?: User;

    constructor(private http: HttpClient) { }

    setUser(user : User) {
        this.authenticatedUser = user;
    }

    authenticateUser(username: string, password: string): Observable<User> {
        return this.http.post<User>(this.usersUrl + "authenticate/", {"username": username, "password" : password});
    }

    logout(): void {
        this.authenticatedUser = undefined;
    }
}