import { RTable } from '../models/table';
import { splitInputName } from '../utils/splitInputName';

export const updateTableInputValue = (
  table: RTable,
  name: string,
  value: string
): RTable => {
  const { row, column: columnNumber, field } = splitInputName(name);

  table.rows[row].columns = table.rows[row].columns.map((column, i) => {
    if (i === columnNumber) {
      return { ...column, [field]: value };
    }
    return { ...column };
  });

  return { ...table };
};
