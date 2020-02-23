
import { Injectable, Pipe } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, switchMap, tap, exhaustMap } from 'rxjs/operators';
import { VatService } from 'src/app/settings/vat-service';
import * as actions from './vat.action';
import { Vat } from 'src/Models/Vat';

@Injectable()
export class VatsEffects {

   
    load$ = createEffect(() => this.actions$.pipe(
        ofType(actions.GetAll),

        switchMap(() => this.vatService.getAll()
            .pipe(
                map((all: Vat[]) => actions.GetAllSuccess({ all })),                
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

    add$ = createEffect(() => this.actions$.pipe(
        ofType(actions.Add),

        switchMap(({one}) => this.vatService.Add(one)
            .pipe(
                map((vat: Vat) => actions.AddSuccess({ one })),                
                tap((data) => {
                    console.log(data);
                }),
                catchError(err =>
                    of(actions.AddFaillure({ err }))
                ))
        ))
    );
    update$ = createEffect(() => this.actions$.pipe(
        ofType(actions.Update),

        switchMap(({one}) => this.vatService.Update(one)
            .pipe(
                map((vat: Vat) => actions.UpdateSuccess({ one })),                
                tap((data) => {
                    console.log(data);
                }),
                catchError(err =>
                    of(actions.UpdateFaillure({ err }))
                ))
        ))
    );

    constructor(
        private actions$: Actions,
        private vatService: VatService
    ){ }
}