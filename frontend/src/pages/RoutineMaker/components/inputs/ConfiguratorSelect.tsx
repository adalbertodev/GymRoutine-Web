import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  SxProps
} from '@mui/material';
import { memo } from 'react';
import { SelectOption } from '../../models/ui';

interface ConfiguratorSelectProps {
  styles?: SxProps;
  size?: 'small' | 'medium';
  label?: string;
  value?: string | number | undefined;
  options?: SelectOption[];
  onChange?: (e: SelectChangeEvent) => void;
}

export const ConfiguratorSelect: React.FC<ConfiguratorSelectProps> = memo(
  ({ styles, size, label, value, options, onChange }) => {
    return (
      <FormControl sx={styles} size={size || 'small'}>
        {label && (
          <InputLabel
            id={`simple-select-autowidth-${label.toLowerCase()}-label`}
          >
            {label}
          </InputLabel>
        )}

        <Select
          labelId='simple-select-autowidth-user-label'
          value={value?.toString() || ''}
          onChange={onChange}
          autoWidth
          label={label}
        >
          {options && options.length !== 0 ? (
            options.map((option) => (
              <MenuItem key={option.id} value={option.name}>
                {option.name}
              </MenuItem>
            ))
          ) : (
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
          )}
        </Select>
      </FormControl>
    );
  }
);
