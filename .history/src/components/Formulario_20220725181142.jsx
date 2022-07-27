import React from 'react';
import styled from '@emotion/styled';
import useSelectMonedas from '../hooks/useSelectMonedas';

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
  letter-spacing: 3px;
  transition: background-color .3s ease;
  &:hover {
    background-color: #3B44F6;
    cursor: pointer;
  }
`;

const Formulario = () => {

  const monedas = [
    { id: 'USD', nombre: 'Dolar de Estados Unidos'},
    { id: 'MXN', nombre: 'Dolar de Estados Unidos'},
    { id: 'EUR', nombre: 'Dolar de Estados Unidos'},
    { id: 'GBP', nombre: 'Dolar de Estados Unidos'},
    { id: 'USD', nombre: 'Dolar de Estados Unidos'},
  ]

  const [ SelectMonedas ] = useSelectMonedas('Elige tu moneda');

  return (
    <form>

      <SelectMonedas />

      <InputSubmit 
        type="submit" 
        value="ver" 
      />
      
    </form>
  )
}

export default Formulario;
