import {ActionReducerMap} from '@ngrx/store';  
import { IAppState } from './app.states';
import { Vat } from 'src/Models/Vat';
import { CustomerCategory } from 'src/Models/CustomerCategory';  
import { customerCategoryReducer } from './settings/customer-category/customer-category.reducer';
import { vatReducer } from './settings/vat/vat.reducer';

export const vatReducers: ActionReducerMap<IAppState<Vat>> = {
    all: vatReducer, 
};

export const customerCategoryReducers: ActionReducerMap<IAppState<CustomerCategory>> = {
    all: customerCategoryReducer, 
};
 