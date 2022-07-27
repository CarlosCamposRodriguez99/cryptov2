import styled from '@emotion/styled';
import ImagenCripto from './img/imagen-criptos.png';
import Form

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media(min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 900;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 35px;

  &::after {
    content: '';
    width: 150px;
    height: 5px;
    background-color: #3330E4;
    display: block;
    margin: 10px auto 0 auto;
  }

`;

function App() {
  return (
    <Contenedor>
      <Imagen 
        src={ImagenCripto}
        alt='imagen cripto'
      />
      <div>
        <Heading>Cotiza Criptomonedas al instante</Heading>

      </div>
      

    </Contenedor>
  )
}

export default App;
