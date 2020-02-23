import { Resource } from "src/Models/Ressource"; 
import { Observable } from "rxjs";
import { map } from "rxjs/operators"; 
import { ISerializer } from "./ISerializer";
import { RequestOptions } from 'http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

export class ResourceService<T extends Resource> {

  
 headers:any;

constructor(
    private httpClient: HttpClient,
    private url: string,
    private endpoint: string,
    private serializer: ISerializer) {

      const header = new HttpHeaders().set('content-type', 'application/json'); 
      this.headers={
        header
      }; 
    }

  public add(item: T): Observable<T> {
    return this.httpClient
      .post<T>(`${this.url}/${this.endpoint}`, this.serializer.toJson(item))
      .pipe(map(data => this.serializer.fromJson(data) as T));
  }

  public update(item: T): Observable<T> {
    return this.httpClient
      .put<T>(`${this.url}/${this.endpoint}/${item.id}`,
        this.serializer.toJson(item),  this.headers )
      .pipe(map(data => this.serializer.fromJson(data) as T));
  }

  find(id: number): Observable<T> {
    return this.httpClient
      .get(`${this.url}/${this.endpoint}/${id}`)
      .pipe(map((data: any) => this.serializer.fromJson(data) as T));
  }

  get(queryOptions?: any): Observable<T[]> {
    return this.httpClient
      .get(`${this.url}/${this.endpoint}?${queryOptions.toQueryString()}`)
      .pipe(map((data: any) => this.convertData(data.items)));
  }

  delete(id: number) {
    return this.httpClient
      .delete(`${this.url}/${this.endpoint}/${id}`,  this.headers );
  }

  private convertData(data: any): T[] {
    return data.map(item => this.serializer.fromJson(item));
  }
  
  private defaultErrorHandler() {
    return (error: any) => {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error')
    };
 }
}