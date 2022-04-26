import styled from 'styled-components';

export const TableInput = styled.input`
  width: 100%;
  text-align: center;
  border-top: 1px solid rgba(0, 0, 0, 0.5);
  border-right: 1px solid rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  border-left: 1px solid rgba(0, 0, 0, 0.05);
  background-color: inherit;
  color: inherit;
  padding: 0.3rem;

  &:first-child {
    border-left: 1px solid rgba(0, 0, 0, 0.5);
  }

  &:last-child {
    border-right: 1px solid rgba(0, 0, 0, 0.5);
  }

  &:focus {
    /* border: 2px solid black; */
    outline: 0;
    box-shadow: 0px 0px 4px 2px var(--table-shadows);
  }
`;
