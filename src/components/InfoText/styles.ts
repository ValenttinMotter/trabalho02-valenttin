import styled, { css } from "styled-components/native";

type TextProps = {
  text: string;
};

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.Text<TextProps>`
  font-size: 14px;
  font-weight: 700;
  font-family: Inter_700Bold;
  margin-right: 8px;
  ${({ text }) =>
    text === "Produtos"
      ? css`
          color: #31c667;
        `
      : css`
          color: #7a4a9e;
        `}
`;

export const Number = styled.Text`
  color: #333;
  font-size: 12px;
  font-family: Inter_700Bold;
  padding: 2px 8px;
  background-color: #d9d9d9;
  border-radius: 999px;
`;
