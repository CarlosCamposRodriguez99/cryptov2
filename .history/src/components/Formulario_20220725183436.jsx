import React from 'react';
import styled from '@emotion/styled';
import useSelectMonedas from '../hooks/useSelectMonedas';
import { monedas } from '../data/monedas';

const InputSubmit = styled.input`
  background-color: #3330E4;
  border: none;
  width: 100%;
  padding: 10px;
  color: #FFF;
  margin-top: 30px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  letter-spacing: 3px;
  transition: background-color .3s ease;
  &:hover {
    background-color: #3B44F6;
    cursor: pointer;
  }
`;

const Formulario = () => {

  const [ state, SelectMonedas ] = useSelectMonedas('Elige tu moneda', monedas);

  return (
    <form>

      <SelectMonedas />

      {state}

      <InputSubmit 
        type="submit" 
        value="ver" 
      />
      
    </form>
  )
}

export default Formulario;
