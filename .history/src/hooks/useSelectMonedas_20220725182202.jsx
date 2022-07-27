import React from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
  color: #FFF;
  display: block;
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: 700;
`;

const useSelectMonedas = (label, opciones) => {

  const selectMonedas = () => (
    <>
        <Label>{label}</Label>
        <select>
          <option value=''>Seleccione</option>

          {opciones.map( opcion => (
            <option
              key={opcion.id}
              value={opcion.id}
            >{opcion.nombre}</option>
          ))}
        </select>
    </>
  )
  return [ selectMonedas ]
}

export default useSelectMonedas
