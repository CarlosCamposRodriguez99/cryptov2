import React from 'react';
import styled from '@emotion/styled';

const 

const useSelectMonedas = (label) => {

  const selectMonedas = () => (
    <>
        <label>{label}</label>
    </>
  )
  return [ selectMonedas ]
}

export default useSelectMonedas