// react imports
import React, { useContext, useState } from "react";

// react native imports
import { ActivityIndicator, Colors } from "react-native-paper";

// context
import { AuthenticationContext } from "../../../services/authentication/autentication.context";

// components - styles
import { AccountBackground, AccountCover, AccountContainer, 
          AuthButton, AuthInput, ErrorContainer, ErrorText } from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, isLoading,  error} = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(ea) => setEmail(ea)}
        />
        <Spacer size="large">
          <AuthInput 
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(pass) => setPassword(pass)}
          />
        </Spacer>
        {error && (
          <ErrorContainer size="large">
            <ErrorText>
              <Text variant="error">{error}</Text>
            </ErrorText>
          </ErrorContainer>
        )}
        <Spacer size="large">
          {!isLoading ? (
            <AuthButton
              icon="login"
              mode="contained"
              onPress={() => onLogin(email, password)}
            >
              Login
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={Colors.orange300} />
          )}
        </Spacer>
      </AccountContainer>
      <Spacer size="large">
          <AuthButton
            mode="contained"
            onPress={() => navigation.goBack()}
          >
            Back
          </AuthButton>
      </Spacer>
    </AccountBackground>
  );
}