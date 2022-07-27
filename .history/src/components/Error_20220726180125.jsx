import styled from '@emotion/styled';

const Texto = styled.div`
  background-color: #B7322C;
  color: #FFFFFF;
  border-radius: 5px;
  padding: 15px;
  font-size: 24px;
  text-transform: uppercase;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  text-align: center;
`;

const Error = ({children}) => {
  return (
    <Texto>
      {children}
    </Texto>
  )
}

export default Error
