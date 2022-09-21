// react imports
import React, { useContext } from "react";

// navigation
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "./app.navigator";
import { AccountNavigator } from "./account.navigator";

// context
import { AuthenticationContext } from "../../services/authentication/autentication.context";

export const Navigation = () => {
    const { isAuthenticated } = useContext(AuthenticationContext);

    return  (
        <NavigationContainer>
            {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
        </NavigationContainer>
    );
    
};