import styled from 'styled-components';

// export const TextFieldInput = styled.input`
//   width: 100%;
//   /* font: inherit;
//   letter-spacing: inherit;
//   color: currentColor;
//   padding: 4px 0 5px;
//   border: 0;
//   box-sizing: content-box;
//   background: none;
//   height: 1.4375em;
//   margin: 0;
//   -webkit-tap-highlight-color: transparent;
//   display: block;
//   min-width: 0;
//   width: 100%;
//   animation-name: miu-auto-fill-cancel;
//   animation-duration: 10ms;

//   &::before {
//     border-bottom: 1px solid rgba(0, 0, 0, 0.42);
//     left: 0;
//     bottom: 0;
//     content: '\00a0';
//     position: absolute;
//     transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
//     pointer-events: none;

//     border-left: 1px solid rgba(0, 0, 0, 0.42);
//     border-right: 1px solid rgba(0, 0, 0, 0.42);
//     height: 100%;
//   }

//   &::after {
//     border-bottom: 2px solid #1976d2;
//     left: 0;
//     bottom: 0;
//     content: '';
//     position: absolute;
//     transform: scaleX(0);
//     transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
//     pointer-events: none;
//   }

//   &:focus {
//     outline: 0;
//   } */
// `;
export const TextFieldInput = styled.input`
  width: 100%;
  font: inherit;
  letter-spacing: inherit;
  color: currentColor;
  padding: 4px 0 5px;
  border: 0;
  box-sizing: content-box;
  background: none;
  height: 1.4375em;
  margin: 0;
  -webkit-tap-highlight-color: transparent;
  display: block;
  min-width: 0;
  width: 100%;
  animation-name: miu-auto-fill-cancel;
  animation-duration: 10ms;

  &::before {
    border-bottom: 1px solid rgba(0, 0, 0, 0.42);
    left: 0;
    bottom: 0;
    content: '';
    position: absolute;
    transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    pointer-events: none;

    border-left: 1px solid rgba(0, 0, 0, 0.42);
    border-right: 1px solid rgba(0, 0, 0, 0.42);
    height: 100%;
  }

  &::after {
    border-bottom: 2px solid #1976d2;
    left: 0;
    bottom: 0;
    content: '';
    position: absolute;
    transform: scaleX(0);
    transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    pointer-events: none;
  }

  &:focus {
    outline: 0;
  }
`;
