import styled from '@emotion/styled';

const Texto = styled.div`
  background-color: #B7322C;
  color: #FFFFFF;
  padding: 15px;
`;

const Error = ({children}) => {
  return (
    <Texto>
      {children}
    </Texto>
  )
}

export default Error
