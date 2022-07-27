import React from 'react';
import styled from '@emotion/styled';

const InputSubmit = styled.input`
  background-color: #9497
`;

const Formulario = () => {
  return (
    <form>
      <InputSubmit 
        type="submit" 
        value="cotizar" 
      />
      
    </form>
  )
}

export default Formulario;
