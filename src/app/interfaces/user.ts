import { Department } from "./department";

export interface User {
    Id : number,
    Username : string,
    Password : string,
    Matricule : string,
    Department : Department
}