import { createAction, props } from "@ngrx/store";
import { CustomerCategory } from "src/Models/CustomerCategory";

export const GetAll = createAction("GetAll")
export const GetAllSuccess = createAction("GetAllSuccess", props<{ all: CustomerCategory[] }>())
export const GetAllFaillure = createAction("GetAllFaillure", props<{ err }>())


export const Upsert = createAction("Upsert", props<{ one: CustomerCategory,isNew:Boolean }>())

export const Add = createAction("Add", props<{ one: CustomerCategory }>())
export const AddSuccess = createAction("AddSuccess", props<{ one: CustomerCategory }>())
export const AddFaillure = createAction("AddFaillure", props<{ err }>())
 
export const Update = createAction("Update", props<{ one: CustomerCategory }>())
export const UpdateSuccess = createAction("UpdateSuccess", props<{ one: CustomerCategory }>())
export const UpdateFaillure = createAction("UpdateFaillure", props<{ err }>())
 
export const Delete = createAction("Delete", props<{ all: CustomerCategory[] }>())
export const DeleteSuccess = createAction("DeleteSuccess", props<{ all: CustomerCategory[] }>())
export const DeleteFaillure = createAction("DeleteFaillure", props<{ err }>())