// react imports
import React from "react";

// navigation imports
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";

// screens
import { CheckoutScreen } from "../../features/checkout/screens/checkout.screen";
import { CheckoutErrorScreen } from "../../features/checkout/screens/checkout-error.screen";
import { CheckoutSuccessScreen } from "../../features/checkout/screens/checkout-success.screen";

const CheckoutStack = createStackNavigator();

export const CheckoutNavigator = () => {
    return (
        <CheckoutStack.Navigator
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                headerShown: false,
            }}
        >
            <CheckoutStack.Screen 
                name="CheckoutScreen" 
                component={CheckoutScreen} 
            />
            <CheckoutStack.Screen 
                name="CheckoutSuccess" 
                component={CheckoutSuccessScreen} 
            />
            <CheckoutStack.Screen 
                name="CheckoutError" 
                component={CheckoutErrorScreen} 
            />
        </CheckoutStack.Navigator>
    )
}