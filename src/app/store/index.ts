import {ActionReducerMap} from '@ngrx/store';
import {vatsReducer} from './settings/vat.reducer';
import { IAppState } from './app.states';

export const appReducers: ActionReducerMap<IAppState> = {
    all: vatsReducer, 
};