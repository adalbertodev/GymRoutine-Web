import { Autocomplete, AutocompleteRenderInputParams } from '@mui/material';
import { memo } from 'react';
import Exercise from '../../../../models/Exercise';

interface RoutineAutocompleteProps<T> {
  options: T[];
  groupBy?: ((option: T) => string) | undefined;
  inputValue?: string;
  onInputChange?: (
    e: React.SyntheticEvent<Element, Event>,
    value: string,
    input: React.RefObject<HTMLInputElement>
  ) => void;
  onBlur?: (e: React.FocusEvent<HTMLDivElement, Element>) => void;
  input: React.RefObject<HTMLInputElement>;
  renderInput: (params: AutocompleteRenderInputParams) => React.ReactNode;
}

export const RoutineAutocomplete: React.FC<RoutineAutocompleteProps<Exercise>> =
  memo(
    ({
      options,
      groupBy,
      inputValue,
      onInputChange,
      onBlur,
      renderInput,
      input
    }) => {
      return (
        <Autocomplete
          disableClearable
          freeSolo
          selectOnFocus
          options={options}
          groupBy={groupBy}
          inputValue={inputValue}
          onInputChange={(e, value) =>
            onInputChange && onInputChange(e, value, input)
          }
          onBlur={onBlur}
          renderInput={renderInput}
        />
      );
    }
  );
