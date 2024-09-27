import {
  Checked,
  Container,
  DeleteButton,
  NotChecked,
  ProductName,
  Trash,
  Wrapper,
} from "./styles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export type Props = {
  name: string;
  isDone: boolean;
  onDone: () => void;
  onRemove: () => void;
};

export const ProductCard = ({ name, isDone, onDone, onRemove }: Props) => {
  return (
    <Container isDone={isDone}>
      <Wrapper>
        {isDone ? (
          <Checked name="checkbox-marked-circle" />
        ) : (
          <NotChecked name="checkbox-blank-circle-outline" />
        )}
        <ProductName isDone={isDone}>{name}</ProductName>
      </Wrapper>
      <DeleteButton onPress={onRemove}>
        <Trash name="trash-can-outline" />
      </DeleteButton>
    </Container>
  );
};
