import styled from '@emotion/styled';

const Texto = styled.div`
  background-color: #B7322C;
  color: #FFFFFF;
  border-radius: 20px;
  letter-spacing: 2px;
  padding: 15px;
  font-size: 24px;
  text-transform: uppercase;
  font-family: 'Lato', sans-serif;
  font-weight: 900;
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
