// react imports
import React, { createContext, useState, useEffect, useContext } from "react";

// react native imports
import AsyncStorage from "@react-native-async-storage/async-storage";

// context
import { AuthenticationContext } from "../authentication/autentication.context";


export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([]);
    const { user } = useContext(AuthenticationContext);

    const saveFavourites = async (value, uid) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
        } catch (err) {
            console.log("Saving error", err);
        }
    };

    const loadFavourites = async (uid) => {
        try {
            const value = await AsyncStorage.getItem(`@favourites-${uid}`);
            if (value != null) {
                setFavourites(JSON.parse(value));
            }
        } catch (err) {
            console.log("Loading error", err);
        }
    }

    const add = (restaurant) => {
        setFavourites([...favourites, restaurant]);
    };

    const remove = (removedRest) => {
        const newFavourites = favourites.filter(
            (restaurants) => restaurants.placeId !== removedRest.placeId
        );
        setFavourites(newFavourites);
    }

    useEffect(() => {
        if (user) {
            loadFavourites(user.uid);
        }
    }, [user])

    useEffect(() => {
        if (user) {
            saveFavourites(favourites, user.uid);
        }
    }, [favourites, user])

    return (
        <FavouritesContext.Provider
            value={{
                favourites,
                addToFavourites: add,
                removeFromFavourites: remove,
            }}
        >
            { children }
        </FavouritesContext.Provider>
    );
};