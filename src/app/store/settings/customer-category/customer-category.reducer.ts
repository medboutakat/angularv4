import {Action, createReducer, on} from '@ngrx/store';
import * as vatActions from './customer-category.action'; 
import { Vat } from 'src/Models/Vat';
import { CustomerCategory } from 'src/Models/CustomerCategory';
import { IAllState } from '../settings.state';

const initVatsState: IAllState<CustomerCategory> = {
    loading: false,
    error: null,
    all: [],
};

// const initVatState: IOneState<Vat> = {
//     loading: false,
//     error: null,
//     one:null,
// };

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

export function customerCategoryReducer(state: IAllState<CustomerCategory> | undefined, action: Action)
{
    return reducer(state, action);
}
