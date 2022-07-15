// react native imports
import { Text } from "react-native";
import { Button, TextInput } from "react-native-paper";

// styles
import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_background.png"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

// for lightening up
export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1); 
`;

// buttons container
export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

// buttons
export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
`;

// input box for login & register form
export const AuthInput = styled(TextInput)`
  width: 300px;
`;

// errors
export const ErrorText = styled(Text)`
  font-size: 15px;
`

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`