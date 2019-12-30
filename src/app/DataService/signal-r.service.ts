import { Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr"; 
import { ChartModel } from 'src/Interfaces/chartdata.model';
import { Map } from 'src/Models/Map';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ROOT_URL } from 'src/Models/Config';
@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  public data: ChartModel[] = [{data:[], label:''}, {data:[], label:''}, {data:[], label:''}, {data:[], label:''}];


  constructor(private http: HttpClient ){

  }
private hubConnection: signalR.HubConnection

  public startConnection = () => {
    
var hubEndpoint='http://localhost:42333/chart';
    // user.access_token
    this.hubConnection = new signalR.HubConnectionBuilder()
                  .withUrl(hubEndpoint, {
                       accessTokenFactory: () => "",  
                       skipNegotiation: true,
                       transport: signalR.HttpTransportType.WebSockets 
                  })
                  .configureLogging(signalR.LogLevel.Information)
                  .build();
              


    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }

  public addListener = () => {
    this.hubConnection.on('receivechartdata', (data) => {
      this.data = data;
      console.log(data);
    });
  }
  

  public getMap ()  {
    
    return this.http.get<Map[]>(ROOT_URL + 'Vats');
  }
}

