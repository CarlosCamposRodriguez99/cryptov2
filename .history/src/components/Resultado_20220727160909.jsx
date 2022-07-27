import styled from '@emotion/styled';

const Resultado = styled.div`
  
`;

const Texto = styled.p`
  
`;

const Resultado = ({resultado}) => {

  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado;

  return (
    <Resultado>
      <p>El precio es de: <span>{PRICE}</span></p>
      <p>El más alto del día: <span>{HIGHDAY}</span></p>
      <p>El más bajo del día: <span>{LOWDAY}</span></p>
      <p>Últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></p>
      <p>Última actualización: <span>{LASTUPDATE}</span></p>
    </Resultado>
  )
}

export default Resultado;