import { Container, Number, Text } from "./styles";

type Props = {
  text: string;
  number: number;
};

export const InfoText = ({ text, number }: Props) => {
  return (
    <Container>
      <Text text={text}>{text}</Text>
      <Number>{number}</Number>
    </Container>
  );
};
