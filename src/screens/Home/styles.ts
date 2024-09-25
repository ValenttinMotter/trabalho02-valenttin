import styled from "styled-components/native";
import AntDesign from "@expo/vector-icons/AntDesign";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  background-color: #7a4a9e;
  height: 173px;
  max-width: 393px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  color: #f2f2f2;
  font-size: 18px;
  font-weight: 700;
  font-family: Inter_700Bold;
`;

export const MainContainer = styled.View`
  flex: 1;
  background-color: #f2f2f2;
  padding: 0 24px 0 24px;
  position: relative;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  top: -27px;
  margin-bottom: 32px;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const TextInput = styled.TextInput`
  height: 54px;
  width: 289px;
  background-color: #f2f2f2;
  border: 0.5px solid #808080;
  padding: 16px;
  border-radius: 6px;
  font-size: 16px;
  font-family: Inter_400Regular;
  margin-right: 4px;
`;

export const Button = styled.TouchableOpacity`
  height: 52px;
  width: 52px;
  justify-content: center;
  align-items: center;
  background-color: #31c667;
  border-radius: 6px;
`;

export const PlusIcon = styled(AntDesign).attrs(() => ({
  size: 16,
  color: "white",
}))``;
