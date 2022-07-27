import styled from '@emotion/styled';

const Resultado = ({resultado}) => {

  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado;

  return (
    <div>
      <p>El precio es de: <span>{PRICE}</span></p>
      <p>El más alto del día: <span>{PRICE}</span></p>
      <p>El más bajo del día: <span>{PRICE}</span></p>
      <p>Últimas 24 horas: <span>{PRICE}</span></p>
      <p>El precio es de: <span>{PRICE}</span></p>
    </div>
  )
}

export default Resultado;