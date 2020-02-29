import {Action, createReducer, on} from '@ngrx/store';
import * as vatActions from './vat.action'; 
import { Vat } from 'src/Models/Vat';
import { IAllState } from '../settings.state';

const initVatsState: IAllState<Vat> = {
    loading: false,
    error: null,
    all: [],
};
 

const reducer = createReducer(initVatsState,

    /* GetVats */
    on(vatActions.GetAll, state =>
    {
        return {
            ...state,
            loading: true
        };
    }),

    // GetVats successfull
    on(vatActions.GetAllSuccess, (state, {all}) =>
    {
        return {
            ...state,
            loading: false,
            error: null,
            all: all,
        }
    }),

    on(vatActions.GetAllFaillure, (state, {err}) =>
    {
        return {
            ...state,
            loading: false,
            error: err
        }
    }),
   /* GetVats */
   on(vatActions.Update, state =>
    {
        return {
            ...state,
            loading: true
        };
    }),
    on(vatActions.UpdateFaillure, (state, {err}) =>
    {
        return {
            ...state,
            loading: false,
            error: err
        }
    }),   
    on(vatActions.UpdateSuccess, (state, {one}) =>
    {
        return {
            ...state,
            loading: false,
            error: null,
            one:one
        }
    }),
    on(vatActions.Add, (state) =>
    { 
        return {
                ...state,
                loading: true
        } 
    }), 
    on(vatActions.AddSuccess, (state, {one}) =>
    { 
        return {
            ...state,
            loading: false,
            error: null,
            one:one
        } 
    }),
    on(vatActions.AddFaillure, (state, {err}) =>
    { 
        return {
            ...state,
            loading: false,
            error: err, 
        } 
    }),

    on(vatActions.Delete, (state) =>
    { 
        return {
                ...state,
                loading: true
        } 
    }), 
    on(vatActions.DeleteSuccess, (state, {all}) =>
    { 
        return {
            ...state,
            loading: false,
            error: null,
            all:all
        } 
    }),
    on(vatActions.DeleteFaillure, (state, {err}) =>
    { 
        return {
            ...state,
            loading: false,
            error: err, 
        } 
    }),
);

export function vatReducer(state: IAllState<Vat> | undefined, action: Action)
{
    return reducer(state, action);
}
