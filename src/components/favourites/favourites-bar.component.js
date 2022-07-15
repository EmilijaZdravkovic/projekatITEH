// react imports
import React from "react";

// react native imports
import { ScrollView, TouchableOpacity } from "react-native";

// styles
import styled from "styled-components/native";
import { Text } from "../typography/text.component";

// components
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { Spacer } from "../spacer/spacer.component";

const FavouritesWrapper = styled.View`
    padding: 10px;
`;

export const FavouritesBar = ({ favourites, onNavigate }) => {
    if(!favourites.length) {
        return null;
    } 

    return (
        <FavouritesWrapper>
            <Spacer variant="left.xlarge">
                <Text variant="caption">Favourites</Text>
            </Spacer>

            <ScrollView
                horizontal // left to right
                showsHorizontalScrollIndicator={false}
            >
                {favourites.map((restaurant) => {
                    const key = restaurant.name.split(" ").join("");
                    return (
                        <Spacer position="left" size="medium" key={key}>
                            <TouchableOpacity 
                                onPress={() => onNavigate("RestaurantDetail", {
                                    restaurant,
                                })}
                            >
                                <CompactRestaurantInfo restaurant={restaurant} />
                            </TouchableOpacity>
                        </Spacer>
                    );
                })}
            </ScrollView>
        </FavouritesWrapper>
    );
};