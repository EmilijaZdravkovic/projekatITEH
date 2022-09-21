// react imports
import React from "react";

// components - styles
import { AccountBackground, AccountCover, AccountContainer, 
          AuthButton, Title } from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";

export const AccountScreen = ({ navigation }) => {
    return (
        <AccountBackground>
          <AccountCover />
          <AccountContainer>
            <AuthButton
                icon="login"
                mode="contained"
                onPress={() => navigation.navigate("Login")}
            >
              Login
            </AuthButton>
            <Spacer size="large">
            <AuthButton
                icon="badge-account-horizontal-outline"
                mode="contained"
                onPress={() => navigation.navigate("Register")}
            >
              Register
            </AuthButton>
            </Spacer>
          </AccountContainer>
        </AccountBackground>
      );
};