import { Component, OnInit, Inject, ViewChild } from '@angular/core';

import {
  Title
} from '@angular/platform-browser';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatSnackBar
} from '@angular/material';

import { HttpClient } from '@angular/common/http';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators
} from '@angular/forms';



import * as _moment from 'moment';
import {
  Router
} from '@angular/router';
import { EmployeeService } from '../../DataService/emp.service';
import { CustomerService } from '../customer-service';
import { Customer } from 'src/Models/Customer';
import { ColDef, ColumnApi, GridApi } from 'ag-grid-community';
import { CustomersEditComponent } from '../customers-edit/customers-edit.component';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  /************************* */
  // row data and column definitions
  private rowData: Customer[];
  private columnDefs: ColDef[];

  // gridApi and columnApi
  private api: GridApi;
  private columnApi: ColumnApi; 

  private rowSelection;

  private SelectedClient: Customer;


  /**************************************** */
  date: any;
  clients: Customer[] = new Array();
  pageEmployes: Customer[];
  motCle: string = '';
  size: number = 5;

  page: number = 0;
  pages: Array<number>;
  ArrayS: number;
  client: Customer = new Customer();
  mode: number = 0;
  photo: string;
  firstFormGroup: FormGroup;
  service: string;
  animate;

  private createColumnDefs() {
    return [
      { headerName: 'code', field: 'code', editable: true, filter: true, sortable: true, checkboxSelection: true },
      { headerName: 'Nom', field: 'name1', editable: true, filter: true, sortable: true },
      { headerName: 'name2', field: 'name2', editable: true, filter: true, sortable: true }
    ]
  }
  

  constructor(private http: HttpClient, public customerService: CustomerService, public SerEmployes: EmployeeService, public dialog: MatDialog,
    private _formBuilder: FormBuilder, private titleService: Title, public snackBar: MatSnackBar, private router: Router) {
    this.columnDefs = this.createColumnDefs();
    this.rowSelection = "multiple";
  }

  

  onGridReady(params): void {
    this.api = params.api;
    this.columnApi = params.columnApi;

    this.api.sizeColumnsToFit();
    console.log(params);
  }

  LoadData() {
    this.customerService.GetAll().subscribe(
      response => {
        this.rowData = response
        console.log("row data", this.rowData);
      },
      error => {
        console.log(error);
      }
    )
  }
  
  IsRowSelected: boolean = false;
  IsMultiple: boolean = false;
  IsNew: boolean;
  onSelectionChanged(event) {

    if (this.api.getSelectedRows().length == 0) {
      this.IsRowSelected = false;
    } else {
      this.IsRowSelected = true;

    }
    if (this.api.getSelectedRows().length != 1) {
      this.IsMultiple = true;
      console.log("multiple....");
    } else {
      this.IsMultiple = false;
    }
    console.log(event);

  }
  //oussama
  @ViewChild( CustomersEditComponent, { static:false, }) customerEdit:CustomersEditComponent;

  edit() {
    this.IsNew = false;
    console.log("editiiiiiiing");
    this.SelectedClient = this.api.getSelectedRows()[0];
    this.mode = 1;
    
    this.firstFormGroup.controls['id'].setValue(this.SelectedClient.id);
    this.firstFormGroup.controls['code'].setValue(this.SelectedClient.code);
    this.firstFormGroup.controls['name1'].setValue(this.SelectedClient.name1);
    this.firstFormGroup.controls['name2'].setValue(this.SelectedClient.name2);
    this.firstFormGroup.controls['email'].setValue("mail@mail.com");
    this.firstFormGroup.controls['adresse'].setValue(this.SelectedClient.adresse);
    this.firstFormGroup.controls['patent'].setValue("patent");
    this.firstFormGroup.controls['code'].setValue(this.SelectedClient.code);
    this.firstFormGroup.controls['Lnaissance'].setValue("25/10/1997");    
    this.firstFormGroup.controls['gender'].setValue("Homme");
    this.firstFormGroup.controls['rc'].setValue(this.SelectedClient.rc);

    // this.secondFormGroup.controls['rc'].setValue(emp.rcEtude);
    // this.secondFormGroup.controls['service'].setValue(emp.service);
    // this.secondFormGroup.controls['DateDebut'].setValue(emp.dateDeb);
    // this.secondFormGroup.controls['DateFin'].setValue(emp.dateFin);
    // this.client.photo = emp.photo;
    // this.client.matricule = emp.matricule;

    //oussama
    this.customerEdit.myForm.controls['name1'].setValue(this.SelectedClient.name1);
    this.customerEdit.myForm.controls['email'].setValue("mail@mail.com");
    this.customerEdit.myForm.controls['adresse'].setValue(this.SelectedClient.adresse);
    this.customerEdit.myForm.controls['patent'].setValue("patent");
    this.customerEdit.myForm.controls['code'].setValue(this.SelectedClient.name3);
    this.customerEdit.myForm.controls['Lnaissance'].setValue("25/10/1997");
    this.customerEdit.myForm.controls['name2'].setValue(this.SelectedClient.name2);
    this.customerEdit.myForm.controls['gender'].setValue("Homme");

    
  }

  add() {
    this.mode = 1;
    this.IsNew = true;
    this.firstFormGroup.reset();
    //oussama
    // this.customerEdit.client.id = 0;
    // this.customerEdit.client.code = "I123";
    // this.customerEdit.client.name1 = "El Bakouri";
    // this.customerEdit.client.name2 = "Oussama";
    // this.customerEdit.client.name3 = "Bak";
    // this.customerEdit.client.patent = "13%";
    // this.customerEdit.client.adresse = "Benkirane";
    // this.customerEdit.client.gender = "Man";
    // this.customerEdit.client.email = "oussama@gmail.com";
    // this.customerEdit.client.rc = "rc";
    // this.customerEdit.client.clientCategorieID = 1;
    // this.customerEdit.client.contracts = null;
    // this.customerEdit.client.clientLocationID = 1;
    // this.customerEdit.client.clientLocation = null;

    // alert(this.customerEdit.myForm.controls.name1);
    
  }

  delete() {
    this.openDialog(this.api.getSelectedRows());
  }

  ngOnInit() {
    
    this.CurrentEmp = JSON.parse(localStorage.getItem('currentUser'));
    if (!this.CurrentEmp) {
      //this.router.navigate(['login']);
    }
    console.log(this.CurrentEmp);
    setTimeout(() => this.animate = 'start', 1000);
    // this.http.get('http://localhost:4200/assets/clients.json').subscribe(resp=>{
    //   resp
    // })

    this.LoadData();
    this.firstFormGroup = this._formBuilder.group({
      id: [0, Validators.required],
      name1: ['', [Validators.required, Validators.minLength(4)]],
      name2: ['', [Validators.required, Validators.minLength(4)]],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      code: ['',],
      rc: ['',],
      adresse: ['', Validators.required],
      patent: ['', Validators.required]
    });


    this.titleService.setTitle('Gestion des Employes - Cosumar');

  }

  get name1(): any {
    return this.firstFormGroup.get('name1');
  }

  get name2(): any {
    return this.firstFormGroup.get('name2');
  }

  get gender(): any {
    return this.firstFormGroup.get('gender');
  }

  get email(): any {
    return this.firstFormGroup.get('email');
  }


  get code(): any {
    return this.firstFormGroup.get('code');
  }
  get rc(): any {
    return this.firstFormGroup.get('rc');
  }
  get adresse(): any {
    return this.firstFormGroup.get('adresse');
  }

  get patent(): any {
    return this.firstFormGroup.get('patent');
  }

  /*   * Recupération de la liste des clients  */


  /*
   onGridReady(params) {
     this.gridApi = params.api;
     this.gridColumnApi = params.columnApi;
     console.log(params);
   }
 */
  onCellValueChanged(event) {

    console.log(event); ///to test it
    event.data.modified = true;
    console.log(event);
    this.openSnackBar(" Data Changed ", "Edit");

  }

  saveModifiedRows() {

    const modifiedRows = this.rowData.filter(row => row['modified']);
    console.log(modifiedRows);

  }

  chercher() {
    /*
    this.serv.getClient().subscribe(resp => {
      let listClient: client[] = new Array();
      listClient = <client[]>resp['data'];
      console.log("filtring");
      let listFinded: client[] = new Array();
      listClient.forEach(element => {
        if (element.name1.includes(this.motCle)) {
          listFinded.push(element);
        }

      });
      this.clients = listFinded;
    });*/
  }

  // chercherService() {

  //   this.SerEmployes.getEmployes().subscribe(resp => {
  //     let listEmp: client[] = new Array();
  //     listEmp = <client[]>resp['data'];
  //     console.log("filtring");
  //     let listFinded: client[] = new Array();
  //     listEmp.forEach(element => {
  //       if (element.service == this.service) {
  //         listFinded.push(element);
  //       }

  //     });
  //     this.pageEmployes = listFinded;
  //   })
  // }



  // onSubmit(): void {
  //   this.client.name1 = this.nom.value;
  //   this.client = this.name2.value;
  //   console.log(this.client);

  // }

  annuler() {
    this.firstFormGroup.reset();
    this.mode = 0;
    this.api.deselectAll();
    this.IsRowSelected = false;
  }

  send() {
    if (this.IsNew) {
      console.log(this.client);
      // sending new client to api
      this.customerService.Add(this.client).subscribe(resp => {
        console.log(resp);
        this.openSnackBar("client added succesfly!", "add");
      })
    } else {
      //editing client
    }
  }

  OnlySelected: boolean = false;

  exportCSV() {

    var params = {
      onlySelected: this.OnlySelected
    };
    if (this.OnlySelected && this.api.getSelectedRows().length == 0)
      alert("No rows is selected! select some rows or uncheck only selected rows checkbox.")
    else this.api.exportDataAsCsv(params);
  }

  update() {
    this.customerService.Update(this.client).subscribe(value => {

      console.log(value);
      this.annuler();
      this.mode = 0;
      this.openSnackBar("Modification réussi", "Modification ");

    }, error1 => console.log(error1));

  }


  CurrentEmp: Customer;


  setValue() {

    this.client.email = this.email.value;
    this.client.adresse = this.adresse.value;
    this.client.patent = this.patent.value;
    this.client.code = this.code.value;
    // if (this.DateFin.value != null && this.DateFin.value != '') {
    //   this.client.dateFin = _moment(this.DateFin.value).format('YYYY-MM-DD');
    // }
    // if (this.DateDebut.value != null && this.DateDebut.value != '') {
    //   this.client.dateDeb = _moment(this.DateDebut.value).format('YYYY-MM-DD');
    // }
    // if (this.Lnaissance.value != null && this.Lnaissance.value != '') {
    //   this.client.dateNaissance = _moment(this.Lnaissance.value).format('YYYY-MM-DD');
    // }
    this.client.name1 = this.name1.value;
    this.client.name2 = this.name2.value;
    this.client.rc = this.rc.value;
    this.client.gender = this.gender.value;
    console.log(this.client);
  }

  saveEmploye() {
    this.customerService.Add(this.client).subscribe(value => {
      console.log(value);
      this.annuler();
      this.openSnackBar("client ajouté avec succes", "Ajoute");
      this.mode = 0;
    }, error1 => console.log(error1));
  }

  DeleteClient(id: number) {
    this.customerService.Delete(id).subscribe(value => {
      console.log(value);
    }, error1 => console.log(error1));
  }


  openDialog(clientsToDelete: Customer[]): void {
    console.log(clientsToDelete);
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '260px',
      data: clientsToDelete
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        clientsToDelete.forEach(element => {
          console.log(element.id)
        });
        this.api.deselectAll();
        this.IsRowSelected = false;

        this.openSnackBar(" Supression reussi ", "Suppression");

      }

    });
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }




}

@Component({
  template: '<h1 mat-dialog-title>Supression </h1>\n' +
    '<div mat-dialog-content>\n' +
    ' \n' +
    'Would you like to delete items with the above id\'s:<br><p *ngFor="let c of data" ><strong >{{c.id}}</strong></p> ' +
    '</div>\n' +
    '<div mat-dialog-actions>\n' +
    ' <button mat-button mat-dialog-close=\'\'>Annuler</button>\n' +
    ' <button mat-button color="warn" [mat-dialog-close]=\'true\' cdkFocusInitial>Ok</button>\n' +
    '</div>'
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Customer[]) {
    console.log(this.data);
  }



}
