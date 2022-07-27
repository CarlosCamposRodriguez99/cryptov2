import styled from '@emotion/styled';

const Contenedor = styled.div`
  color: #FFF;
  font-family: 'Lato', sans-serif;
  
`;

const Texto = styled.p`
  font-size: 25px;
  span {
    font-weight: 700;
  }
  
`;

const Precio = styled.p`
  font-size: 30px;
  span {
    font-weight: 700;
  }
  
`;

const Resultado = ({resultado}) => {

  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado;

  return (
    <Contenedor>
      <img src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen crypto"/>
      <div>
        
      </div>
    </Contenedor>
  )
}

export default Resultado;