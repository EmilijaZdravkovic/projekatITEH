--fonts installation
expo install expo-font
expo install @expo-google-fonts/oswald
expo install @expo-google-fonts/lato

--svg
expo install react-native-svg

--navigation
yarn add @react-navigation/native
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
yarn add @react-navigation/bottom-tabs

-- camel case
yarn add camelize

-- stack navigation
yarn add @react-navigation/stack

-- react native maps
expo install react-native-maps

-- webview (map marker for android)
expo install react-native-webview

-- async storage (for favourites)
expo install @react-native-async-storage/async-storage

-- firebase
expo install firebase

-- camera
expo install expo-camera


-- Firebase CLI
npm install firebase-functions firebase-admin@latest --save
npm install -g firebase-tools
firebase init functions

-- Google Node SDK
yarn add @googlemaps/google-maps-services-js

-- Integrating Geocoding API
(inside of order)
firebase functions:config:set google.key="AIzaSyDMFDPd5MO1OExlSkCs_cCZLZcxDxWGY6c"
(inside of functions)
firebase functions:config:get > .runtimeconfig.json




-- Stripe Client
yarn add stripe-client

-- Credit Card
yarn add react-native-credit-card-input