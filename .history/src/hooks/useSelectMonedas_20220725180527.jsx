import React from 'react';
import styled from '@emotion/styled';

const Label = styled.label`

`;

const useSelectMonedas = (label) => {

  const selectMonedas = () => (
    <>
        <label>{label}</label>
    </>
  )
  return [ selectMonedas ]
}

export default useSelectMonedas
