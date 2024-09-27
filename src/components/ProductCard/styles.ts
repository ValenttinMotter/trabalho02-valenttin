import styled, { css } from "styled-components/native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

type ProductCardProps = {
  isDone: boolean;
};

export const Container = styled.View<ProductCardProps>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  padding: 12px 18px 12px 12px;
  border-radius: 8px;
  ${({ isDone }) =>
    isDone
      ? css`
          border: 1px solid #d9d9d9;
        `
      : css`
          border: 1px solid #808080;
        `};
  margin-bottom: 8px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const ProductName = styled.Text<ProductCardProps>`
  ${({ isDone }) =>
    isDone &&
    css`
      text-decoration: line-through;
    `}
  font-size: 14px;
  color: #262626;
  font-family: Inter_400Regular;
`;

export const DeleteButton = styled.TouchableOpacity``;

export const Trash = styled(MaterialCommunityIcons).attrs(() => ({
  size: 24,
  color: "#262626",
}))``;

export const NotChecked = styled(MaterialCommunityIcons).attrs(() => ({
  size: 24,
  color: "#31C667",
}))``;

export const Checked = styled(MaterialCommunityIcons).attrs(() => ({
  size: 24,
  color: "#7A4A9E",
}))``;
