import React from 'react';
import styled from '@emotion/styled';

const InputSubmit = styled.input`
  background-color: #3330E4;
  border: none;
  width: 100%;
  padding: 10px;
  color: #FFF;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
  letter-spacing: 5px;

  &:hover {
    background-color: #3B44F6;
  }
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
