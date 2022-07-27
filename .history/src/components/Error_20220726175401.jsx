import styled from '@emotion/styled';

const Texto = styled.div`
  background-color: #B732
`;

const Error = ({children}) => {
  return (
    <Texto>
      {children}
    </Texto>
  )
}

export default Error
