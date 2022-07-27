import React from 'react';
import styled from '@emotion/styled';

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;

`;

function App() {
  return (
    <Contenedor>
      <Heading>Desde App</Heading>

    </Contenedor>
  )
}

export default App
