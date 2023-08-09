import React, { useRef } from "react";
import { View, Text } from 'react-native'
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import NavigatinStack from "./src/components/navigation/NavigationStack";
import FlashMessage from "react-native-flash-message";

const App = () => {

  const myLocalFlashMessage = useRef(null)

  return (
    <Provider store={store} >
      <View style={{ flex: 1 }} >
        <NavigatinStack />
        <FlashMessage ref={myLocalFlashMessage} />
      </View>
    </Provider>
  )
}

export default App;