import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'; 

interface ICrudOperation {
    url:string;
    get();
    add(object);
    update(object);
    delete(id);

    /**
     *
     */

    new (http:HttpClient);
}