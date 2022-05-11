import { Autocomplete, AutocompleteRenderInputParams } from '@mui/material';
import Exercise from '../../../../models/Exercise';

interface RoutineAutocompleteProps<T> {
  options: T[];
  groupBy?: ((option: T) => string) | undefined;
  inputValue?: string;
  handleChange?: (
    e: React.SyntheticEvent<Element, Event>,
    value: string | Exercise
  ) => void;
  renderInput: (params: AutocompleteRenderInputParams) => React.ReactNode;
}

export const RoutineAutocomplete: React.FC<
  RoutineAutocompleteProps<Exercise>
> = ({ options, groupBy, inputValue, handleChange, renderInput }) => {
  return (
    <Autocomplete
      disableClearable
      freeSolo
      selectOnFocus
      options={options}
      groupBy={groupBy}
      inputValue={inputValue}
      onChange={handleChange}
      renderInput={renderInput}
    />
  );
};
