import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { ROOT_URL } from 'src/Models/Config';
import { Observable } from 'rxjs';
import { CustomerCategory } from 'src/Models/CustomerCategory';
import { ResourceService } from '../ResourceService';
import { CustomerCategorySerializer } from './CustomerCategorySerializer';
@Injectable()
export class CustomerCategoryService extends ResourceService<CustomerCategory> {
  constructor(httpClient: HttpClient) {
    super(
      httpClient,
      ROOT_URL,
      'statuts',
      new CustomerCategorySerializer());
  }
}



