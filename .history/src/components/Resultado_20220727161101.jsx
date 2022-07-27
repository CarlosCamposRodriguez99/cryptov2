import styled from '@emotion/styled';

const ResultadoCont = styled.div`
  
`;

const Texto = styled.p`
  
`;

const Precio = styled.p`
  
`;

const Resultado = ({resultado}) => {

  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado;

  return (
    <ResultadoCont>
      <Precio>El precio es de: <span>{PRICE}</span></Precio>
      <Texto>El más alto del día: <span>{HIGHDAY}</span></Texto>
      <Texto>El más bajo del día: <span>{LOWDAY}</span></Texto>
      <Texto>Últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
      <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>
    </ResultadoCont>
  )
}

export default Resultado;