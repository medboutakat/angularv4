import { IAllState } from "./settings/settings.state";  

export interface IAppState<T>
{
    readonly all: IAllState<T>
}
 