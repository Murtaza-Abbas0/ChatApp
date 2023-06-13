import React from "react";
import { View, Text } from 'react-native'
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import LoginScreen from "./src/screens/LoginScreen";
import NavigatinStack from "./src/components/navigation/NavigationStack";

const App = () => {
  return (
    <Provider store={store} >
      <View style={{ flex: 1 }} >
        <NavigatinStack />
      </View>
    </Provider>
  )
}

export default App;