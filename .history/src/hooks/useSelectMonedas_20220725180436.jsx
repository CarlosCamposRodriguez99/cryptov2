import React from 'react'

const useSelectMonedas = (label) => {

  const selectMonedas = () => (
    <>
        <label>{label}</label>
    </>
  )
  return [ selectMonedas ]
}

export default useSelectMonedas
