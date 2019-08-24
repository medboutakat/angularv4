import { Component, OnInit, Inject } from '@angular/core';
import {
  employee, Employee
} from './../../Models/Employee';
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
import { EmployeeService } from '../DataService/emp.service';
import { ClientDataService } from '../DataService/ClientDataService';
import { client } from 'src/Models/Client';
import { ColDef, ColumnApi, GridApi } from 'ag-grid-community';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

/************************* */
  // row data and column definitions
  private rowData: client[];
  private columnDefs: ColDef[];

  // gridApi and columnApi
  private api: GridApi;
  private columnApi: ColumnApi;



  /**************************************** */
  date: any;
  clients:client[]=new Array();
  pageEmployes: employee[];
  motCle: string = '';
  size: number = 5;

  page: number = 0;
  pages: Array<number>;
  ArrayS: number;
  employee: employee = new employee();
  mode: number = 0;
  photo: string;
  firstFormGroup: FormGroup;
  service: string;
  //ajouter employee
  secondFormGroup: FormGroup;
  animate;
  private createColumnDefs() {
    return [
      { headerName: 'Nom', field: 'name1', editable: true },
      { headerName: 'Prenom', field: 'name2', editable: true },
      { headerName: 'code', field: 'code', editable: true }
    ]
  }
  // columnDefs = [
  //   { headerName: 'Nom', field: 'name1' ,editable:true},
  //   { headerName: 'Prenom', field: 'name2', editable:true},
  //   { headerName: 'code', field: 'code', editable: true }
  // ];
  

  constructor(private http: HttpClient,public serv:ClientDataService, public SerEmployes: EmployeeService, public dialog: MatDialog,
    private _formBuilder: FormBuilder, private titleService: Title, public snackBar: MatSnackBar, private router: Router) {
    this.columnDefs = this.createColumnDefs();

  }
  onGridReady(params): void {
    this.api = params.api;
    this.columnApi = params.columnApi;

    this.api.sizeColumnsToFit();
    console.log(params);
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

    this.serv.getClient().subscribe(
      response => {
        this.rowData = response
      },
      error => {
        console.log(error);
      }
    )
    this.firstFormGroup = this._formBuilder.group({
      nom: ['', [Validators.required, Validators.minLength(4)]],
      prenom: ['', [Validators.required, Validators.minLength(4)]],
      sexe: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tele: ['', [Validators.required, Validators.pattern('(^[6]+[0-9]{8}$)')]],
      ville: ['',],
      Lnaissance: ['',],
      adresse: ['', Validators.required],
      cin: ['', Validators.required]

    });
    this.secondFormGroup = this._formBuilder.group({
      DateDebut: ['', Validators.required],
      DateFin: ['',],
      Niveau: ['', Validators.required],
      service: ['', Validators.required],
    });

    this.titleService.setTitle('Gestion des Employes - Cosumar');

  }

  get nom(): any {
    return this.firstFormGroup.get('nom');
  }

  get prenom(): any {
    return this.firstFormGroup.get('prenom');
  }

  get sexe(): any {
    return this.firstFormGroup.get('sexe');
  }

  get email(): any {
    return this.firstFormGroup.get('email');
  }
  set nom1(value: any) {
    this.firstFormGroup.controls['nom'].setValue(value);
  }
  get tele(): any {
    return this.firstFormGroup.get('tele');
  }
  get ville(): any {
    return this.firstFormGroup.get('ville');
  }
  get Lnaissance(): any {
    return this.firstFormGroup.get('Lnaissance');
  }
  get adresse(): any {
    return this.firstFormGroup.get('adresse');
  }
  get DateDebut(): any {
    return this.secondFormGroup.get('DateDebut');
  }
  get DateFin(): any {
    return this.secondFormGroup.get('DateFin');
  }
  get Niveau(): any {
    return this.secondFormGroup.get('Niveau');
  }
  get Service(): any {
    return this.secondFormGroup.get('service');
  }
  get cin(): any {
    return this.firstFormGroup.get('cin');
  }

  /*   * Recupération de la liste des clients  */
  getClients() {
    this.SerEmployes.getEmployes().subscribe(resp => {
      console.log(resp);
      this.clients= resp['data'];
      console.log(this.clients);

    })
  }

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

    const modifiedRows = this.rowData.filter(row =>row['modified']);
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

  chercherService() {

    this.SerEmployes.getEmployes().subscribe(resp => {
      let listEmp: employee[] = new Array();
      listEmp = <employee[]>resp['data'];
      console.log("filtring");
      let listFinded: employee[] = new Array();
      listEmp.forEach(element => {
        if (element.service == this.service) {
          listFinded.push(element);
        }

      });
      this.pageEmployes = listFinded;
    })
  }
  gotoPage(i: number) {
    if (i < 0) i = 0;
    if (i > this.pages.length) i = this.pages.length;
    this.page = i;
    this.getClients();
  }


  onSubmit(): void {
    this.employee.nom = this.nom.value;
    this.employee = this.prenom.value;
    console.log(this.employee);

  }
  chargerEmp(emp: employee) {
    console.log(emp);
    this.mode = 2;
    this.firstFormGroup.controls['nom'].setValue(emp.nom);
    this.firstFormGroup.controls['email'].setValue(emp.email);
    this.firstFormGroup.controls['adresse'].setValue(emp.adresse);
    this.firstFormGroup.controls['cin'].setValue(emp.cin);
    this.firstFormGroup.controls['tele'].setValue(emp.tele);
    this.firstFormGroup.controls['ville'].setValue(emp.ville);
    this.firstFormGroup.controls['Lnaissance'].setValue(emp.dateNaissance);
    this.firstFormGroup.controls['prenom'].setValue(emp.prenom);
    this.firstFormGroup.controls['sexe'].setValue(emp.sexe);

    this.secondFormGroup.controls['Niveau'].setValue(emp.niveauEtude);
    this.secondFormGroup.controls['service'].setValue(emp.service);
    this.secondFormGroup.controls['DateDebut'].setValue(emp.dateDeb);
    this.secondFormGroup.controls['DateFin'].setValue(emp.dateFin);
    this.employee.photo = emp.photo;
    this.employee.matricule = emp.matricule;

  }
  annuler() {
    this.secondFormGroup.reset();
    this.firstFormGroup.reset();
    this.mode = 0;
  }
  updateEmp() {
    this.SerEmployes.modiEmployee(this.employee.matricule, this.employee).subscribe(value => {

      this.getClients();
      console.log(value);
      this.annuler();
      this.mode = 0;
      this.openSnackBar("Modification réussi", "Modification ");

    }, error1 => console.log(error1));

  }


  CurrentEmp: employee;
  

  setValue() {

    this.employee.email = this.email.value;
    this.employee.adresse = this.adresse.value;
    this.employee.cin = this.cin.value;
    this.employee.tele = this.tele.value;
    this.employee.ville = this.ville.value;
    console.log(this.Lnaissance.value);
    if (this.DateFin.value != null && this.DateFin.value != '') {
      this.employee.dateFin = _moment(this.DateFin.value).format('YYYY-MM-DD');
    }
    if (this.DateDebut.value != null && this.DateDebut.value != '') {
      this.employee.dateDeb = _moment(this.DateDebut.value).format('YYYY-MM-DD');
    }
    if (this.Lnaissance.value != null && this.Lnaissance.value != '') {
      this.employee.dateNaissance = _moment(this.Lnaissance.value).format('YYYY-MM-DD');
    }
    this.employee.nom = this.nom.value;
    this.employee.prenom = this.prenom.value;
    this.employee.niveauEtude = this.Niveau.value;
    this.employee.service = this.Service.value;
    this.employee.sexe = this.sexe.value;
    console.log(this.employee);
  }

  saveEmploye() {
    this.SerEmployes.saveEmployes(this.employee).subscribe(value => {
      this.progress.percentage = 0;
      console.log(value);
      this.annuler();
      this.openSnackBar("Employee ajouté avec succes", "Ajoute");
      this.getClients();
      this.mode = 0;
    }, error1 => console.log(error1));
  }

  suppEmploye(matricule: number) {
    this.SerEmployes.suppEmployee(matricule).subscribe(value => {
      this.getClients();
      console.log(value);
    }, error1 => console.log(error1));
  }


  openDialog(matricule: number, nom: string): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '260px',
      data: {
        mat: matricule,
        nom: nom
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.suppEmploye(matricule);
        this.openSnackBar(" Supression reussi ", "Suppression");
      }

    });
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ///Upload file


  selectedFiles: FileList;
  currentFileUpload: File;
  progress: {
    percentage: number
  } = {
      percentage: 0
    };

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0);
    /*this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });*/
    this.employee.photo = this.selectedFiles.item(0).name;
    this.photo = "http://localhost:8080/files/" + this.employee.photo;
    this.selectedFiles = undefined;

  }

}

@Component({
  template: '<h1 mat-dialog-title>Supression </h1>\n' +
    '<div mat-dialog-content>\n' +
    ' \n' +
    ' Voulez vous vraiment supprimer l\'employee avec Matricule :<strong>{{data.mat}}</strong> ' +
    ' et nom : <strong> {{data.nom}}</strong> ' +
    '</div>\n' +
    '<div mat-dialog-actions>\n' +
    ' <button mat-button mat-dialog-close=\'\'>Annuler</button>\n' +
    ' <button mat-button [mat-dialog-close]=\'true\' cdkFocusInitial>Ok</button>\n' +
    '</div>'
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }



}
