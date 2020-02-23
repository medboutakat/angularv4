import {IAppState} from '../app.states';
import {createSelector} from '@ngrx/store'; 

const _selectAll = (state: IAppState) => state.all; 

export const selectAll = createSelector(_selectAll, (state) => state.all);
export const selectOne = createSelector(_selectAll, (state,props) =>
{
  let id=0;

   if(props.id!=undefined)
      id=props.id;

   return  state.all.find(x=> x.id==id)
});