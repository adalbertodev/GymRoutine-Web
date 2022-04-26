import styled from 'styled-components';
import { TextField } from '@mui/material';

export const StyledTextField = styled(TextField)`
  & > div:before {
    border-right: 1px solid rgba(0, 0, 0, 0.05);
    border-left: 1px solid rgba(0, 0, 0, 0.05);
    height: 100%;
  }

  &:first-of-type > div::before {
    border-left: 1px solid rgba(0, 0, 0, 0.5);
  }

  td > div > &:last-of-type > div:before {
    border-right: 1px solid rgba(0, 0, 0, 0.5);
  }
`;
