import { IAllState } from "./settings/vat.state";
import { Vat } from "src/Models/Vat";

export interface IAppState
{
    readonly all: IAllState<Vat>
}
 