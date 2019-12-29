import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class testfact {
 
    myAdd:any;
    constructor(){ 
       this.myAdd = function(x, y) { return x + y; };
    }   

      getTotal(){ 
        return this.myAdd(5,6)
    }
}