// react imports
import React, { useContext, useState, useEffect } from "react";

// react native imports
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

// context
import { CartContext } from "../../../services/cart/cart.context";

// services
import { payRequest } from "../../../services/checkout/checkout.service";

// components
import { SafeArea } from "../../../components/utility/safe-area.component";
import { CreditCardInput } from "../components/credit-card.component";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { CartIconContainer, CartIcon, NameInput, PayButton, ClearButton,
     PaymentProcessing } from "../components/checkout.style";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";


export const CheckoutScreen = ({ navigation }) => {
    const { cart, restaurant, clearCart, sum } = useContext(CartContext);
    const [name, setName] = useState("");
    const [card, setCard] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const onPay = () => {
        setIsLoading(true);
        if(!card || !card.id) {
            setIsLoading(false);
            navigation.navigate("CheckoutError",{
                error: "Please fill in a valid credit card",
            });
            return;
        }
        payRequest(card.id, sum, name)
            .then((result) => {
                setIsLoading(false);
                clearCart();
                navigation.navigate("CheckoutSuccess");
            })
            .catch((err) => {
                setIsLoading(false);
                navigation.navigate("CheckoutError",{
                    error: err,
                });
            });
    }

    if(!cart.length || !restaurant) {
        return (
            <SafeArea>
                <CartIconContainer>
                    <CartIcon icon="cart-off" />
                    <Text>Your cart is empty!</Text>
                </CartIconContainer>
            </SafeArea>
        );
    }

    return(
        <SafeArea>
            <RestaurantInfoCard restaurant={ restaurant } />
            {isLoading && <PaymentProcessing />}
            <ScrollView>
                <Spacer position="left" size="large">
                    <Spacer position="top" size="large">
                        <Text>Your Order</Text>
                    </Spacer>
                    <List.Section>
                        {cart.map(({item,price}) => {
                            return (
                                <List.Item 
                                    title={`${item} - $${price / 100}`}
                                />
                            )
                        })}
                    </List.Section>
                    <Text>Total: ${sum / 100} </Text>
                </Spacer>
                <NameInput 
                    label="Name on the card" 
                    value={name}
                    onChangeText={(t) => setName(t)}
                />
                <Spacer position="top" size="large">
                    {name.length > 0 && 
                    <CreditCardInput 
                        name={name} 
                        onSuccess={setCard}
                        onError={() =>
                            navigation.navigate("CheckoutError", {
                                error: "Something went wrong processing your credit card",
                            })
                        }
                    />}
                </Spacer>

                <Spacer position="top" size="xlarge">
                    <PayButton 
                        icon="cash-multiple" 
                        mode="contained"
                        onPress={onPay}
                        disabled={isLoading}
                    >
                        Order
                    </PayButton>
                    <Spacer position="top" size="large" />
                    <ClearButton 
                        icon="cart-off" 
                        mode="contained"
                        onPress={clearCart}
                        disabled={isLoading}
                    >
                        Clear Cart
                    </ClearButton>
                </Spacer>
                <Spacer position="top" size="large" />        
            </ScrollView> 
        </SafeArea>
    );
};