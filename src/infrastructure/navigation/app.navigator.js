// react imports
import React from "react";

// context
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";;
import { CartContextProvider } from "../../services/cart/cart.context";

// navigation imports
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// navigators
import { RestaurantsNavigator } from "./restaurants.navigator";
import { CheckoutNavigator } from "./checkout.navigator";
import { MapScreen  } from "../../features/map/screens/map.screen";
import { SettingsNavigator } from "./settings.navigator";

// navigation setup
const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant-outline",
  Checkout: "cart-outline",
  Map: "ios-map-outline",
  Settings: "settings-outline",
};



const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: "tomato",
    tapBarInactiveTintColor: "gray",
    headerShown: false,
  };
};

export const AppNavigator = () => (
      <FavouritesContextProvider>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <CartContextProvider>
              <Tab.Navigator
                screenOptions={createScreenOptions}
              >
                <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
                <Tab.Screen name="Checkout" component={CheckoutNavigator} />
                <Tab.Screen name="Map" component={MapScreen} />
                <Tab.Screen name="Settings" component={SettingsNavigator} />
              </Tab.Navigator>
            </CartContextProvider>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </FavouritesContextProvider>
  );

