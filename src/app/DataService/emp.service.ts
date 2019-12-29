import { Injectable } from '@angular/core';
import { map, filter, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { employee } from 'src/Models/Employee';
import { Observable } from 'rxjs';
import { ReturnStatement } from '@angular/compiler';
import { Customer } from 'src/Models/Customer';



@Injectable()
export class EmployeeService {



    constructor(public http: HttpClient) {

    }

    getEmployes(): Observable<Customer[]> {
        return this.http.get<Customer[]>('http://localhost:4200/assets/clients.json');
    }
    getEmployesService(service: String): any {
        console.log(service);

        this.getEmployes().subscribe(resp => {
            let listEmp: employee[] = new Array();
            console.log(resp);
            listEmp = <employee[]>resp['data'];
            console.log(listEmp);
            console.log("filtring");
            let listFinded: employee[] = new Array();
            listEmp.forEach(element => {
                if (element.service == service) {
                    console.log(element);
                    listFinded.push(element);

                }
                console.log(listFinded.length);

            });
            return listFinded;
        })


    }

    saveEmployes(employee: employee) {
        return this.http.get('http://localhost:4200/assets/clients.json');
    }
    suppEmployee(Matricule: any) {
        return this.http.get('http://localhost:4200/assets/clients.json');
    }
    modiEmployee(mat: number, employee: employee) {
        return this.http.get('http://localhost:4200/assets/clients.json');
    }
}
