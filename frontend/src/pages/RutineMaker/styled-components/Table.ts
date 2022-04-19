import styled from 'styled-components';

interface tableProps {
  columns?: number;
}

export const Table = styled.div<tableProps>`
  /* --column-count: ${(props) => props.columns}; */

  /* display: grid; */
  width: 80%;
  text-align: center;
  margin: auto;
  /* grid-template-columns: repeat(auto-fill, 1fr); */

  border: 1px solid black;
  border-radius: 10px;
`;

Table.defaultProps = {
  columns: 1
};
