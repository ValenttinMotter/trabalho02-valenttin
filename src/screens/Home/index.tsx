import { Alert, FlatList } from "react-native";
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

type Product = {
  name: string;
  isDone: boolean;
};

export const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productName, setProductName] = useState<string>("");

  const handleProductAdd = () => {
    if (productName.trim() === "") {
      return Alert.alert("Erro!", "Por favor, insira um nome para o produto.");
    }

    const isDuplicate = products.some(
      (product) => product.name === productName
    );
    if (isDuplicate) {
      return Alert.alert("Produto existente", "Este produto já está na lista.");
    }

    const newProduct: Product = {
      name: productName,
      isDone: false,
    };
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    setProductName("");
  };

  const handleProductDone = (name: string) => {
    setProducts(
      products.map((product) =>
        product.name === name
          ? { ...product, isDone: !product.isDone }
          : product
      )
    );
  };

  const handleProductRemove = (name: string) => {
    Alert.alert("Remover", `Deseja remover ${name} da lista?`, [
      {
        text: "Sim",
        onPress: () =>
          setProducts(products.filter((product) => product.name !== name)),
      },
      {
        text: "Não",
        onPress: () => {
          return;
        },
      },
    ]);
  };

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
            keyboardType="default"
            value={productName}
            onChangeText={setProductName}
          ></TextInput>
          <Button onPress={handleProductAdd}>
            <PlusIcon name="pluscircleo" />
          </Button>
        </InputContainer>
        <InfoContainer>
          <InfoText text="Produtos" number={products.length}></InfoText>
          <InfoText
            text="Finalizados"
            number={
              products.filter((product) => product.isDone === true).length
            }
          ></InfoText>
        </InfoContainer>
        <FlatList
          data={products}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <ProductCard
              name={item.name}
              isDone={item.isDone}
              onDone={() => handleProductDone(item.name)}
              onRemove={() => handleProductRemove(item.name)}
            />
          )}
          ListEmptyComponent={<EmptyList />}
        />
      </MainContainer>
    </Container>
  );
};
