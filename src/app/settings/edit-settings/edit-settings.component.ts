import { Component, OnInit, EventEmitter, ViewChild, Output, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgForm, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-edit-settings',
  templateUrl: './edit-settings.component.html',
  styleUrls: ['./edit-settings.component.css']
})
export class EditSettingsComponent implements  ControlValueAccessor{
 
  @Input() reset: boolean;
  @Input() isReset: boolean ;
  @Input() isNew: boolean ; 
  @Input() objemp: any;   


  onChange: any = () => {}
  onTouch: any = () => {}

  val= "" // this is the updated value that the class accesses

  set value(val){ 
     // this value is updated by programmatic changes 

     console.log("val",val)
     if( val !== undefined && this.val !== val){
       this.val = val
       this.onChange(val)
       this.onTouch(val)
      }
  }
  // this method sets the value programmatically
  writeValue(value: any)
  { 
    console.log("val",value)
    this.value = value
  }
  // upon touching the element, this method gets triggered
  registerOnTouched(fn: any){
    this.onTouch = fn;
  }

  registerOnChange(fn: any): void {
    console.log("val",fn)
    this.onChange = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  } 
 }
