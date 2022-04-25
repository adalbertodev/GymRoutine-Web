// import { TextFieldInput } from '../styled-components/TextFieldInput';

import React from 'react';
import { TextFieldContainer } from '../styled-components/TextFieldContainer';
import { TextFieldInputBase } from '../styled-components/TextFieldInputBase';
import { TextFieldInput } from '../styled-components/TextFieldInput';

const TextField: React.FC = () => {
  return (
    <TextFieldContainer>
      <TextFieldInputBase>
        <TextFieldInput type='text' />
      </TextFieldInputBase>
    </TextFieldContainer>
  );
};

export default TextField;
