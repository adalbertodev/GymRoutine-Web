import { SelectChangeEvent } from '@mui/material';
import { memo, useEffect, useState } from 'react';
import { setTable } from '../../contexts/tableActions';
import { useTable } from '../../hooks/useTable';
import { Template } from '../../models/table';
import { ConfiguratorSelect } from './ConfiguratorSelect';
import RoutineTemplates from '../../data/RoutineTemplates.json';

interface TemplateSelectProps {
  onChange?: (e: SelectChangeEvent<string>) => void;
}

export const TemplateSelect: React.FC<TemplateSelectProps> = memo(
  ({ onChange }) => {
    const { dispatch } = useTable();
    const [templates, setTemplates] = useState<Template[]>([]);

    useEffect(() => {
      setTemplates(RoutineTemplates as Template[]);
    }, []);

    const handleChange = (e: SelectChangeEvent<string>) => {
      const template = templates.find(
        ({ ...template }) => template.name === e.target.value
      ) as Template;

      dispatch(setTable({ ...template.table }));
    };
    return (
      <ConfiguratorSelect
        styles={{ m: 1, minWidth: 120 }}
        label='Templates'
        value={''}
        options={templates.map((template) => ({
          id: template.name,
          name: template.name
        }))}
        onChange={onChange || handleChange}
      />
    );
  }
);
