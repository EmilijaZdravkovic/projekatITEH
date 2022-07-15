// react imports
import React, { useContext, useState, useCallback } from "react";

// react native imports
import { TouchableOpacity } from "react-native";
import { List, Avatar } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

// context
import { AuthenticationContext } from "../../../services/authentication/autentication.context";

// styles
import styled from "styled-components/native";

// components
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

const SettingsItem = styled(List.Item)`
    padding: ${props => props.theme.space[3]};
    margin-bottom: -20px;
`;

const AvatarContainer = styled.View`
  align-items: center;
  margin-top: 16px;
`;

export const SettingsScreen = ({ navigation }) => {
    const { onLogout, user } = useContext(AuthenticationContext);
    const [photo, setPhoto] = useState(null);

    const getProfilePicture = async (currentUser) => {
        const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
        setPhoto(photoUri);
    }

    useFocusEffect(
        useCallback(() => {
            getProfilePicture(user);
        }, [user])
    );

    return (
      <SafeArea>
        <AvatarContainer>
            <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
                {!photo && (
                    <Avatar.Icon 
                        size={180} 
                        icon="face-man-shimmer-outline" 
                        backgroundColor="#2182BD" 
                    />
                )}
                {photo && (
                    <Avatar.Image 
                        size={180} 
                        source={{ uri: photo }}
                        backgroundColor="#2182BD" 
                    />
                )}
            </TouchableOpacity>
            <Spacer position="top" size="large">
                <Text variant="label">{user.email}</Text>
            </Spacer>
        </AvatarContainer>

        <List.Section>
            <SettingsItem
                title="Favourites"
                description="View your favourites"
                left={(props) => 
                    <List.Icon {...props} color="black" icon="heart" />}
                onPress={() => navigation.navigate("Favourites")}
            />
            <SettingsItem
                title="Logout"
                left={(props) => 
                    <List.Icon {...props} color="black" icon="exit-run" />}
                onPress={onLogout}
            />
        </List.Section>
      </SafeArea>
    );
  };