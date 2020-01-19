import { Injectable } from '@angular/core';
import { Statut } from 'src/Models/Statut';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ROOT_URL } from 'src/Models/Config';  
import { ResourceService } from '../ResourceService'; 
import { StatutSerializer } from './StatutSerializer';

export class StatutService extends ResourceService<Statut> {
    constructor(httpClient: HttpClient) {
      super(
        httpClient,
        ROOT_URL,
        'statuts',
        new StatutSerializer());
    }
}
 