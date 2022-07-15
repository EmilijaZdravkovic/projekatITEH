// react imports
import React, { useContext, useState, useEffect } from "react";

// react maps imports
import MapView from "react-native-maps";

// context
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

// styles
import styled from "styled-components/native";

// components
import { Search } from "../components/search.component";
import { MapCallout } from "../components/map-callout.component";

const Map = styled(MapView)`
    height: 100%;
    width: 100%;
`;

export const MapScreen = ({ navigation }) => {
    const { location } = useContext(LocationContext);
    const { restaurants = [] } = useContext(RestaurantsContext);

    const [deltaLat, setDeltaLat] = useState(0);
    const { lat, lng, viewport } = location;

    useEffect(() => {
        const northeastLat = viewport.northeast.lat;
        const southwestLat = viewport.southwest.lat;

        setDeltaLat(northeastLat - southwestLat);
    }, [location, viewport]);

    return (
        <>
            <Search />
            <Map
                region={{
                    latitude: lat,
                    longitude: lng,
                    latitudeDelta: deltaLat,
                    longitudeDelta: 0.02,
                }}
            >
                {restaurants.map((restaurant) => {
                    return (
                        <MapView.Marker
                            key={restaurant.name}
                            title={restaurant.name}
                            coordinate={{
                                latitude: restaurant.geometry.location.lat,
                                longitude: restaurant.geometry.location.lng,
                            }}
                        >
                            <MapView.Callout
                                onPress={() => navigation.navigate("RestaurantDetail", { restaurant})}
                            >
                                <MapCallout restaurant={restaurant} />
                            </MapView.Callout>
                        </MapView.Marker>
                    );
                })}
            </Map>
        </>
    );
};
    