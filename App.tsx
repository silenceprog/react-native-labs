import React from 'react';
import Navigation from "../Project/navigation/Navigation";
import { View } from "react-native";

function App(): React.ReactElement {
  return (
    <>
      <View style={{ flex: 1, padding: 10 }}>
        <Navigation />
      </View>
    </>
  );
}

export default App;