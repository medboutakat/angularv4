import { Component, OnInit, Output, ViewChild, EventEmitter, Input, ElementRef } from '@angular/core';
import { InvoiceService } from '../invoice.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { InvoiceHeader, InvoiceDetail } from 'src/Models/InvoiceModels';
import { CustomerService } from 'src/app/sales/customer-service';
import { ColDef } from 'ag-grid-community';
import { AgGridNg2 } from 'ag-grid-angular';
@Component({
  selector: 'app-invoice-edit',
  templateUrl: './invoice-edit.component.html',
  styleUrls: ['./invoice-edit.component.css']
})

export class InvoiceEditComponent implements OnInit {
  @ViewChild('agGrid', { static: false, }) agGrid: AgGridNg2;

  objectFromDetail: any;
  _customers: any;
  objTemp: InvoiceHeader = new InvoiceHeader();
  objID:InvoiceDetail=new InvoiceDetail();
  objDetail:InvoiceDetail=new InvoiceDetail();
  tempemp:InvoiceDetail;
  objDetails:InvoiceDetail[]=[]; 

  get getDetails(){
    return this.objDetails;
  }
  @ViewChild('closeBtn', { static: false, }) cb: ElementRef; 
  @ViewChild('EditForm', { static: false, }) myForm: NgForm;
  @Output() nameEvent = new EventEmitter<string>();
  @Input() reset: boolean = false;
  @Input() isReset: boolean = false;
  @Input() IsNew: boolean = false;
  @Input() objView: InvoiceHeader = new InvoiceHeader();

  private columnDefs: ColDef[];
  

  constructor(private service: InvoiceService,private customerService:CustomerService,private activatedRoute: ActivatedRoute,private route: Router) {
    this._customers = this.customerService.GetAll(); 
    this.columnDefs=this.createColumnDefs();
  }
  ngOnInit() 
  {   
    // var details=new InvoiceDetail();  
    // details.no= this.objDetails.length+1;
    // details.pCode= "ddd";
    // details.pname= "eeeeeeeeeeeeeeeee";
    // details.qte="0";
    // details.prix="0";   
    // this.objDetails.push(details);
    // var details=new InvoiceDetail();  
    // details.no= this.objDetails.length+1;
    // details.pCode= "ddd";
    // details.pname= "eeeeeeeeeeeeeeeee";
    // details.qte="0";
    // details.prix="0";   
    // this.objDetails.push(details); 
    this.LoadData();
    this.objTemp.invoiceDetails.forEach(element => { 
       this.objDetails.push(element); 
    });
  }
 
  LoadData() { 
  
    // var gridDiv = document.querySelector('#myGrid');
    //  new agGrid.Grid(gridDiv, gridOptions);
 
    this.activatedRoute.data.subscribe((data: { datas: InvoiceHeader}) => {  
      console.log("datas : ",data.datas);
      this.objTemp = data.datas; 

    //   var dataSource = {
    //     rowCount: null, // behave as infinite scroll
    //     getRows: function (params) {
    //         console.log('asking for ' + params.startRow + ' to ' + params.endRow);
    //         // At this point in your code, you would call the server, using $http if in AngularJS 1.x.
    //         // To make the demo look real, wait for 500ms before returning
    //         setTimeout( function() {
    //             // take a slice of the total rows
    //             var rowsThisPage = data.slice(params.startRow, params.endRow);
    //             // if on or after the last page, work out the last row.
    //             var lastRow = -1;
    //             if ( this.objTemp .length <= params.endRow) {
    //                 lastRow =  this.objTemp .length;
    //             }
    //             // call the success callback
    //             params.successCallback(rowsThisPage, lastRow);
    //         }, 500);
    //     }
    // };

    //  this.gridOptions.api.setDatasource(dataSource);


    }); 

  }

  get customers(){
    return this._customers;
  }
 



  private createColumnDefs() {
    return [ 
      { headerName: 'Id', field: 'id', editable: true, filter: true, sortable: true, checkboxSelection: true },
      { headerName: 'Code', field: 'pCode', editable: true, filter: true, sortable: true },
      { headerName: 'Name', field: 'pname', editable: true, filter: true, sortable: true },
      { headerName: 'Prix', field: 'prix', editable: true, filter: true, sortable: true },
      { headerName: 'Qte', field: 'qte', editable: true, filter: true, sortable: true },
      // { headerName: "ID", width: 50,
      //          // it is important to have node.id here, so that when the id changes (which happens
      //          // when the row is loaded) then the cell is refreshed.
      //          valueGetter: 'node.id',
      //          cellRenderer: 'loadingRenderer'
      // },
       
    ]
  }
  
 addRow() {
    this.agGrid.api.updateRowData({
      add: [ this.objDetail]
    });

    
  }
 
 
 
//  gridOptions = {
//      defaultColDef: {
//          resizable: true
//      },
//      components:{
//          loadingRenderer: function(params) {
//              if (params.value !== undefined) {
//                  return params.value;
//              } else {
//                  return '<img src="../images/loading.gif">'
//              }
//          }
//      },
//      debug: true,
//      rowBuffer: 0,
//      rowSelection: 'multiple',
//      rowDeselection: true,
//      columnDefs: this.columnDefs,
//      rowModelType: 'infinite',  // tell grid we want virtual row model type 
//      paginationPageSize: 100,// how big each page in our page cache will be, default is 100
//      // how many extra blank rows to display to the user at the end of the dataset,
//      // which sets the vertical scroll and then allows the grid to request viewing more rows of data.
//      // default is 1, ie show 1 row.
//      cacheOverflowSize: 2,
//      // how many server side requests to send at a time. if user is scrolling lots, then the requests
//      // are throttled down
//      maxConcurrentDatasourceRequests: 1,
//      // how many rows to initially show in the grid. having 1 shows a blank row, so it looks like
//      // the grid is loading from the users perspective (as we have a spinner in the first col)
//      infiniteInitialRowCount: 1000,
//      // how many pages to store in cache. default is undefined, which allows an infinite sized cache,
//      // pages are never purged. this should be set for large data to stop your browser from getting
//      // full of data
//      maxBlocksInCache: 10
//  };
 
   

  AddDetails(obj:InvoiceDetail ) {  
    console.log(obj);
    console.log("obj.no "+obj.no); 
    var details=new InvoiceDetail();  

    if((obj.no+'') != 'undefined')
    {
      console.log("Update", (obj.no+'') );
      var obj1 = this.objDetails.filter(function(objTemp) {
        return objTemp.no == obj.no;
      });  
      console.log("Add : ",  obj1[0]);
      obj1[0].pCode=obj.pCode;
      obj1[0].pname=obj.pname;
      
    }
    else
    {
      details.no= this.objDetails.length+1;
      details.pCode= obj.pCode;
      details.pname=obj.pname;
      details.qte="0";
      details.prix="0";  
      this.objView=new InvoiceHeader(); 
      this.objDetails.push(details);
      this.addRow();
    } 
    console.log("Details : ",this.objDetails);
  }
  newDetail(){
    this.objDetail = new InvoiceDetail();
    console.log(this.objDetail);
  }

  DeleteDetails(objDetail:InvoiceDetail){
  
    var objectFromDetail = this.objDetails.filter(function(obj) {
      return obj.no != objDetail.no;
    });  
    this.objDetails=[]; 
    for(var i =0; i<objectFromDetail.length;i++){
      this.objDetails.push(objectFromDetail[i])
    } 
    this.objDetail.pCode="";
    this.objDetail.pname="";
  }

  EditDetails(objDetail:InvoiceDetail){
    
    var obj = this.objDetails.filter(function(obj) {
      return obj.no == objDetail.no;
    });  
    this.objDetail.pCode=obj[0].pCode;
    this.objDetail.pname=obj[0].pname;
    this.objDetail.no=obj[0].no;

  }
 
 

  // Add or Edit
  EditMainObject(regForm: NgForm) {
console.log("saving...............");
    this.objView=new InvoiceHeader();
 
    this.objView.code=regForm.value.code;
    this.objView.date=regForm.value.date;    
    this.objView.invoiceDetails=regForm.value.invoiceDetails;   
    this.objView.invoiceDetails=this.objDetails;
    if(!this.IsNew){
      this.service.Edit(this.objTemp).subscribe(res => {
        alert("Employee updated successfully");
        this.nameEvent.emit("ccc");
        this.cb.nativeElement.click(); 
      }); 
    }else{  
        this.service.Add(this.objView).subscribe(res=>{
          alert("Delivery Added successfully");
            this.TakeHome();
          }
        )
    }
  }
  
  TakeHome(){
    this.nameEvent.emit("ccc");
    this.cb.nativeElement.click();
    // this.route.navigateByUrl('/Sales'); 
  }


}
