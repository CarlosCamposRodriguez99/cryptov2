import React from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
  color: #FFF;
`;

const useSelectMonedas = (label, opciones) => {

  const selectMonedas = () => (
    <>
        <Label>{label}</Label>
        <select>
          <option value=''>Seleccione</option>

          {opciones.map( opcion)}
        </select>
    </>
  )
  return [ selectMonedas ]
}

export default useSelectMonedas
