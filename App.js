// react imports
import React, { useState, useEffect } from "react";

// react native imports
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

// navigation
import { Navigation } from "./src/infrastructure/navigation";

// context
import { AuthenticationContextProvider } from "./src/services/authentication/autentication.context";

// styles
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';
import { useFonts as useOswald, Oswald_400Regular, } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular, } from '@expo-google-fonts/lato';


export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular
  });
  const [latoLoaded] = useLato({
    Lato_400Regular
  });

  if(!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

