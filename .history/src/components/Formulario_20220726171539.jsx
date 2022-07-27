import { useEffect } from 'react';
import styled from '@emotion/styled';
import useSelectMonedas from '../hooks/useSelectMonedas';
import { monedas } from '../data/monedas';

const InputSubmit = styled.input`
  background-color: #3330E4;
  border: none;
  width: 100%;
  padding: 10px;
  color: #FFF;
  margin-top: 30px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  letter-spacing: 3px;
  transition: background-color .3s ease;
  &:hover {
    background-color: #3B44F6;
    cursor: pointer;
  }
`;

const Formulario = () => {

  const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu moneda', monedas);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json()
      const arrayCriptos = resultado

    }
    consultarAPI();

  }, [])

  return (
    <form>

      <SelectMonedas />

      <InputSubmit 
        type="submit" 
        value="ver" 
      />
      
    </form>
  )
}

export default Formulario;
