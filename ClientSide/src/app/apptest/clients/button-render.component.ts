
import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid-community';
import { Customer } from 'src/Models/Customer';

@Component({
  selector: 'app-button-renderer',
  template: `
    <button type="button" (click)="onClick($event)">{{label}}</button>
    `
})

export class ButtonRendererComponent implements ICellRendererAngularComp {

  params;
  label: string;

  agInit(params): void {
    this.params = params;
    this.label = this.params.label || null;
  }

  refresh(params?: any): boolean {
    return true;
  }
  editing:boolean=false;
  selectedItem:Customer;
  onSelectionChanged(event){
    this.editing=true;
    console.log(event);
    this.selectedItem=event.data;

  }

  onClick($event) {
    if (this.params.onClick instanceof Function) {
      // put anything into params u want pass into parents component
      console.log(this.params.node.data);
      const params = {
        event: $event,
        rowData: this.params.node.data
        // ...something
      }
      this.params.onClick(params);
    }
  }
}