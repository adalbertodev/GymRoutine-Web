import styled from 'styled-components';

export const TableCol = styled.div`
  display: grid;
  grid-template-columns: 60% 10% 10% 20%;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;
