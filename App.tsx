
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { AccountNavigator } from "./src/navigator/AccountNavigator";
import store from "./src/store/store";



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
