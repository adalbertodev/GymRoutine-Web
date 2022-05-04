import { useReducer } from 'react';
import {
  emptyTable,
  tableReducer,
  tableReducerAction
} from '../helpers/tableReducer';
import { RTable } from '../models/RTable';

export interface tableHook {
  table: RTable;
  dispatch: React.Dispatch<tableReducerAction>;
  handleChange?: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
}

export const useTable = (): tableHook => {
  const [table, dispatch] = useReducer(tableReducer, emptyTable);

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    // setFormData({ ...formData, [e.target.name]: e.target.value });
    dispatch({
      type: 'changeInput',
      payload: { name: e.target.name, value: e.target.value }
    });
    console.log(table);
  };

  // const handleAutoComplete = (
  //   e: React.SyntheticEvent<Element, Event>,
  //   value: Exercise | string,
  //   reason: AutocompleteChangeReason,
  //   details?: AutocompleteChangeDetails<any>
  // ) => {
  //   dispatch({
  //     type: 'changeInput',
  //     payload: { name: e.currentTarget.name, value: (value as Exercise).label }
  //   });
  // };

  return { table, dispatch, handleChange };
};
