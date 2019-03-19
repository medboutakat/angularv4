import { Component, OnInit } from '@angular/core';
import { SignalRService } from '../DataService/signal-r.service';
import { HttpClient } from '@angular/common/http';
import { SignalRService2 } from '../DataService/SignalRService2';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.sass']
})
export class ChartComponent implements OnInit {
 

  public chartOptions: any = {
    scaleShowVerticalLines: true,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
  public chartLabels: string[] = ['Real time data for the chart'];
  public chartType: string = 'bar';
  public chartLegend: boolean = true;
  public colors: any[] = [{ backgroundColor: '#5491DA' }, { backgroundColor: '#E74C3C' }, { backgroundColor: '#82E0AA' }, { backgroundColor: '#E5E7E9' }]

  constructor(public signalRService: SignalRService2, private http: HttpClient) { }

  ngOnInit() {
    this.signalRService.startConnection();
    this.signalRService.addListener();
    this.startHttpRequest();
  }

  
  private startHttpRequest = () => {
    this.http.get('http://localhost:42333/api/chart')
      .subscribe(res => {
        console.log(res);
      })
  }

}
