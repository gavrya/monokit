import styled from "styled-components";

const Container = styled.div<{ bg: string }>`
  background-color: ${props => props.bg};
`

interface TitleProps {
  weight: 200 | 300 | 400 | 500 | 600 | 700
}

const Title = styled.h1<TitleProps>`
  font-weight: ${({ weight = 400 }) => weight};
`

interface TextProps {
  primary: boolean
}

const Text = styled.p<TextProps>`
  color: ${({ primary }) => primary ? '#424242' : '4b4b4b'};
`

const TestComponent = () => (
  <Container bg='#fcfcfc'>
    <Title weight={300}>Styled Component</Title>
    <Text primary>Some Text</Text>
  </Container>
);

export { TestComponent };
