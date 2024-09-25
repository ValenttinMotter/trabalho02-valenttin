import { InfoText } from "../../components/InfoText";
import {
  Button,
  Container,
  Header,
  InfoContainer,
  InputContainer,
  MainContainer,
  PlusIcon,
  TextInput,
} from "./styles";
import { Text } from "./styles";

export const Home = () => {
  return (
    <Container>
      <Header>
        <Text>Lista de Compras</Text>
      </Header>
      <MainContainer>
        <InputContainer>
          <TextInput placeholder="Adicione um novo produto"></TextInput>
          <Button>
            <PlusIcon name="pluscircleo" />
          </Button>
        </InputContainer>
        <InfoContainer>
          <InfoText text="Produtos" number={0}></InfoText>
          <InfoText text="Finalizados" number={0}></InfoText>
        </InfoContainer>
      </MainContainer>
    </Container>
  );
};
