// react imports
import React, { useContext, useState } from "react";

// react native imports
import { ActivityIndicator, Colors } from "react-native-paper";
import { TouchableOpacity } from "react-native";

// context
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

// styles
import styled from "styled-components/native";
import { RestaurantList } from "../components/restaurant-list.styles";

// components
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Search } from "../components/search.component";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { FadeInView } from "../../../components/animations/fade.animation";

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = ({ navigation }) =>  {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      {isLoading && 
        <LoadingContainer>
          <Loading 
            size={50}
            animating={true}
            color={Colors.orange300}
          />
        </LoadingContainer>
      }
      <Search 
        isFavouritesToggled={isToggled} 
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled &&
        <FavouritesBar 
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      }
      <RestaurantList 
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity 
              onPress={() => 
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <FadeInView>
                <RestaurantInfoCard restaurant={item}/>
              </FadeInView> 
            </TouchableOpacity>
          )
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
)};