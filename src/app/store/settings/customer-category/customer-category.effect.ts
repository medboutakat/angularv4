
import { Injectable, Pipe } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, switchMap, tap, exhaustMap } from 'rxjs/operators'; 
import * as actions from './customer-category.action';
import { CustomerCategory } from 'src/Models/CustomerCategory';
import { CustomerCategoryService } from 'src/app/settings/customer.category-service';

@Injectable()
export class CustomerCategoryEffects {

   
    load$ = createEffect(() => this.actions$.pipe(
        ofType(actions.GetAll),

        switchMap(() => this.service.get()
            .pipe(
                map((all: CustomerCategory[]) => actions.GetAllSuccess({ all })),                
                tap((data) => {
                    console.log(data);
                }),
                catchError(err =>
                    of(actions.UpdateFaillure({ err }))
                ))
        ))
    );

    
    // upsert$ = createEffect(
    //     () =>
    //       this.actions$.pipe(
    //         ofType(actions.Upsert), 
    //         Pipe(({one,isNew}) => {
    //           if (isNew) { 
    //             return  of(actions.Add({ one }))
    //             console.log('add'); 
    //           } else {
    //             console.log('update'); 
                
    //           return   of(actions.Update({ one }))
    //           }
    //         })
    //       ),
    //     { dispatch: false }
    //   );

    // add$ = createEffect(() => this.actions$.pipe(
    //     ofType(actions.Add),

    //     switchMap(({one}) => this.vatService.Add(one)
    //         .pipe(
    //             map((vat: CustomerCategory) => actions.AddSuccess({ one })),                
    //             tap((data) => {
    //                 console.log(data);
    //             }),
    //             catchError(err =>
    //                 of(actions.AddFaillure({ err }))
    //             ))
    //     ))
    // );
    // update$ = createEffect(() => this.actions$.pipe(
    //     ofType(actions.Update),

    //     switchMap(({one}) => this.vatService.Update(one)
    //         .pipe(
    //             map((vat: CustomerCategory) => actions.UpdateSuccess({ one })),                
    //             tap((data) => {
    //                 console.log(data);
    //             }),
    //             catchError(err =>
    //                 of(actions.UpdateFaillure({ err }))
    //             ))
    //     ))
    // );
   
    // delete$ = createEffect(() => this.actions$.pipe(
    //     ofType(actions.Delete),

    //     switchMap(({all}) => this.vatService.Delete(all.find(x=>x.id==1))
    //         .pipe(
    //             map((vat: CustomerCategory) => actions.DeleteSuccess({ all })),                
    //             tap((data) => {
    //                 console.log(data);
    //             }),
    //             catchError(err =>
    //                 of(actions.DeleteFaillure({ err }))
    //             ))
    //     ))
    // );
    
    constructor(
        private actions$: Actions,
        private service: CustomerCategoryService
    ){ }
}