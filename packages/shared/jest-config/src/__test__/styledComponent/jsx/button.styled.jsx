import styled from "styled-components";

const Container = styled.div`
  background-color: ${props => props.bg};
`

const Title = styled.h1`
  font-weight: ${({ weight = 400 }) => weight};
`

const Text = styled.p`
  color: ${({ primary }) => primary ? '#424242' : '4b4b4b'};
`

const TestComponent = () => (
  <Container bg='#fcfcfc'>
    <Title weight={300}>Styled Component</Title>
    <Text primary>Some Text</Text>
  </Container>
)

export { TestComponent };
