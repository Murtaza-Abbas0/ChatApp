import React from "react";
import { View, Text } from 'react-native'
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import LoginScreen from "./src/screens/LoginScreen";

const App = () => {
  return (
    <Provider store={store} >
      <View style={{ flex: 1 }} >
        <LoginScreen />
      </View>
    </Provider>
  )
}

export default App;