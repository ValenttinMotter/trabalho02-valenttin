import { Container, ShoppingList, StrongText, WeakText } from "./styles";
const shoppingList = require("../../assets/shoppingList.png");

export const EmptyList = () => {
  return (
    <Container>
      <ShoppingList source={shoppingList} />
      <StrongText>Você ainda não tem produtos na lista de compras</StrongText>
      <WeakText>Adicione produtos e organize sua lista de compras</WeakText>
    </Container>
  );
};
