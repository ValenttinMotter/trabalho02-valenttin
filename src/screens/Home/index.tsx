import React from "react";
import {
  Button,
  Container,
  Header,
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
      </MainContainer>
    </Container>
  );
};
