
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { AccountNavigator } from "./src/navigator/AccountNavigator";
import store from "./src/store/store";
import { globalStyles } from "./src/themes/global";



const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AccountNavigator/>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
