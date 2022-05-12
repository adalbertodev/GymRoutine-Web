import { memo } from 'react';
import {
  HandlerButton,
  HandlerButtonContainer
} from '../../styled-components/Handler';

interface TableHandlerButtonProps {
  children?: JSX.Element | JSX.Element[] | string;
  color?:
    | 'inherit'
    | 'secondary'
    | 'primary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning';
  onClick: () => void;
}

export const TableHandlerButton: React.FC<TableHandlerButtonProps> = memo(
  ({ children, color, onClick }) => {
    return (
      <HandlerButtonContainer>
        <HandlerButton variant='contained' color={color} onClick={onClick}>
          {children}
        </HandlerButton>
      </HandlerButtonContainer>
    );
  }
);
