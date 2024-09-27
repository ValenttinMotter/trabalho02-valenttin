import { FlatList } from "react-native";
import { InfoText } from "../../components/InfoText";
import {
  Button,
  Container,
  Header,
  InfoContainer,
  InputContainer,
  MainContainer,
  PlusIcon,
  TextHeader,
  TextInput,
} from "./styles";
import { useState } from "react";
import { EmptyList } from "../../components/EmptyList";
import { ProductCard } from "../../components/ProductCard";

export const Home = () => {
  const [products, setProducts] = useState<string[]>(["Teste"]);

  return (
    <Container>
      <Header>
        <TextHeader>Lista de Compras</TextHeader>
      </Header>
      <MainContainer>
        <InputContainer>
          <TextInput
            placeholder="Adicione um novo produto"
            placeholderTextColor={"#808080"}
          ></TextInput>
          <Button>
            <PlusIcon name="pluscircleo" />
          </Button>
        </InputContainer>
        <InfoContainer>
          <InfoText text="Produtos" number={products.length}></InfoText>
          <InfoText text="Finalizados" number={0}></InfoText>
        </InfoContainer>
        <ProductCard
          name="5 maças"
          isDone={false}
          onDone={() => console.log()}
          onRemove={() => console.log}
        />
      </MainContainer>
    </Container>
  );
};
