import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-uploadfiles',
  templateUrl: './uploadfiles.component.html',
  styleUrls: ['./uploadfiles.component.sass']
})
export class UploadfilesComponent implements OnInit {

  selectedFile: File
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }


  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }

  onUpload() { 
     // this.http is the injected HttpClient
  const uploadData = new FormData();

  uploadData.append('myFile', this.selectedFile, this.selectedFile.name);

    this.http.post('http://localhost:42333/api/Upload/Add', uploadData, {
      reportProgress: true,
      observe: 'events'
    }).subscribe(event => {
        console.log(event); // handle event here
    });
  }
}
