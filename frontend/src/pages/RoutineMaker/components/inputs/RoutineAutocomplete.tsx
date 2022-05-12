import { Autocomplete, AutocompleteRenderInputParams } from '@mui/material';
import { memo, useCallback } from 'react';
import Exercise from '../../../../models/Exercise';

interface RoutineAutocompleteProps<T> {
  options: T[];
  groupBy?: ((option: T) => string) | undefined;
  inputValue?: string;
  input: React.RefObject<HTMLInputElement>;
  renderInput: (params: AutocompleteRenderInputParams) => React.ReactNode;
}

export const RoutineAutocomplete: React.FC<RoutineAutocompleteProps<Exercise>> =
  memo(({ options, groupBy, inputValue, renderInput, input }) => {
    const handleAutocompleteChange = useCallback(
      (
        e: React.SyntheticEvent<Element, Event>,
        value: string | Exercise,
        input: React.RefObject<HTMLInputElement>
      ) => {
        if (input.current) {
          input.current.setAttribute('value', (value as Exercise).label);
          let evt = new Event('input', { bubbles: true });
          input.current.dispatchEvent(evt);
        }
      },
      []
    );

    return (
      <Autocomplete
        disableClearable
        freeSolo
        selectOnFocus
        options={options}
        groupBy={groupBy}
        inputValue={inputValue}
        onChange={(e, value) => handleAutocompleteChange(e, value, input)}
        renderInput={renderInput}
      />
    );
  });
