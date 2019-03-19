import { Component, OnInit } from '@angular/core'; 
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { md5 } from 'src/Others/md5';
import * as signalR from '@aspnet/signalr';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
 

export class HomeComponent implements OnInit {
    public group: any;
    public _hubConnection: HubConnection;
    public groupKey: string = '';
    public email: string = '';


    ngOnInit() {
      var hubEndpoint='http://localhost:42333/drinking'; 
    this._hubConnection = new signalR.HubConnectionBuilder() 
                              .withUrl(hubEndpoint, {  
                                accessTokenFactory: () => 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsiQWRtaW5pc3RyYXRvciIsIlJlYWRlciJdLCJPdXJfQ3VzdG9tX0NsYWltIjoiT3VyIGN1c3RvbSB2YWx1ZSIsIklkIjoiMTEwIiwiZXhwIjoxNTQ4NTIwNDQzLCJpc3MiOiJzbWVzay5pbiIsImF1ZCI6InJlYWRlcnMifQ.CdfAa7WcuXkyjhZSHW71uWrM2pU9SfilLBcODAEpmoM',  
                                skipNegotiation: true,
                                transport: signalR.HttpTransportType.WebSockets 
                               })
                               .configureLogging(signalR.LogLevel.Information)
                               .build(); 

                             
        this._hubConnection.on('Group', (data: any) => {
            this.group = data;
        });      
        
         

        this._hubConnection.start()
            .then(() => {
                console.log('Hub connection started')
            })
            .catch(err => {
                console.log('Error while establishing connection')
            });

        console.log(this._hubConnection);
    }

    createOrJoin() {
        this._hubConnection.invoke('CreateOrJoin', this.groupKey, this.email);
    }

    drink() {
        this._hubConnection.invoke('Drink');
    }

    start() {
        this._hubConnection.invoke('Start');
    }

    clear() {
        console.log('test');
        console.log(this.group);
        this.group = null;
        console.log(this.group);
    }
    getGravatarByEmail(email: string): string {
        if (!email) email = "___";
        return 'http://www.gravatar.com/avatar/' + md5(email) + '?s=210&d=mm';
    }
}
