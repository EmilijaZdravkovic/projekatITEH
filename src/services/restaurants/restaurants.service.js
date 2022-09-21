// transforming the data
import camelize from "camelize";

// utils
import { liveHost } from "../../utils/env";

export const restaurantsRequest = (location) => {
  return fetch(
    `${liveHost}/placesNearby?location=${location}`
    ).then((res) => {
      return res.json();
    });
};

export const restaurantsTransform = ({ results = [] }) => {
    const mappedResults = results.map((restaurant) => {
      
      return {
        ...restaurant,
        address: restaurant.vicinity,
        isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
        isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      };
    });
  
    return camelize(mappedResults);
  };