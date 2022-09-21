// react imports
import React from "react";

// styles
import styled from "styled-components/native";

// components
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component";

export const MapCallout = ({ restaurant }) => {
    return (
        <CompactRestaurantInfo 
            isMap
            restaurant={restaurant}
        />
    );
};
