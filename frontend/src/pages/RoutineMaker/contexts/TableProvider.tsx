import {
  ChangeEvent,
  FocusEvent,
  useCallback,
  useEffect,
  useReducer
} from 'react';
import { getExercises } from '../../../services/ExerciseAPI';
import { tableReducer } from '../contexts/tableReducer';
import { emptyTable } from '../utils/emptyTable';
import { setExercises, updateInputValue } from './tableActions';
import { TableContext } from './TableContext';

export interface TableProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const TableProvider: React.FC<TableProviderProps> = ({ children }) => {
  const [tableState, dispatch] = useReducer(tableReducer, {
    table: emptyTable,
    exercises: [],
    difficulty: 5
  });

  useEffect(() => {
    getExercises().then((exercises) => {
      dispatch(setExercises(exercises));
    });
  }, [dispatch]);

  // const timer = useRef<NodeJS.Timer>();

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      // timer.current && clearTimeout(timer.current);
      // timer.current = setTimeout(() => {
      // }, 2000);
      dispatch(
        updateInputValue({ name: e.target.name, value: e.target.value })
      );
    },
    []
  );

  const handleCellChange = useCallback((name: string, value: string) => {
    dispatch(updateInputValue({ name, value }));
  }, []);

  const handleInputBlur = (
    e: FocusEvent<HTMLTextAreaElement | HTMLInputElement | HTMLDivElement>
  ) => {
    const name = e.target.getAttribute('name') || '';
    const value = e.target.getAttribute('value') || '';
    handleCellChange(name, value);
  };

  return (
    <TableContext.Provider
      value={{
        tableState,
        dispatch,
        handleInputChange,
        handleCellChange,
        handleInputBlur
      }}
    >
      {children}
    </TableContext.Provider>
  );
};
