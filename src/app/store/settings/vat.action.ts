import { createAction, props } from "@ngrx/store";
import { Vat } from "src/Models/Vat";

export const GetAll = createAction("GetAll")
export const GetAllSuccess = createAction("GetAllSuccess", props<{ all: Vat[] }>())
export const GetAllFaillure = createAction("GetAllFaillure", props<{ err }>())


export const Upsert = createAction("Upsert", props<{ one: Vat,isNew:Boolean }>())

export const Add = createAction("Add", props<{ one: Vat }>())
export const AddSuccess = createAction("AddSuccess", props<{ one: Vat }>())
export const AddFaillure = createAction("AddFaillure", props<{ err }>())
 
export const Update = createAction("Update", props<{ one: Vat }>())
export const UpdateSuccess = createAction("UpdateSuccess", props<{ one: Vat }>())
export const UpdateFaillure = createAction("UpdateFaillure", props<{ err }>())