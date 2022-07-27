import styled from '@emotion/styled';

const Resultado = ({resultado}) => {

  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado;

  return (
    <div>
      <p>El precio es de: <span></span></p>
    </div>
  )
}

export default Resultado;