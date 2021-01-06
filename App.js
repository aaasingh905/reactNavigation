// In App.js in a new project

import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { createDrawerNavigator, createAppContainer } from "react-navigation";
class HomeScreen extends React.Component {
  render() {
    return (
      <View  style={{
        alignItems: "right"
        }}>
        <Button title="Go To Settings"onPress={this.props.navigation.openDrawer}></Button>
           
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{
        alignItems: "right"}} >
        <Button title="Go To Home" onPress={this.props.navigation.openDrawer}></Button>
      </View>
    );
  }
}



const DrawerNavigator = createDrawerNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
});



const AppContainer = createAppContainer(DrawerNavigator);

export class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

export default App;
