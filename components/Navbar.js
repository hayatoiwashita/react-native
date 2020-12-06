import React from "react";
import { StyleSheet, View } from 'react-native';
import { Header } from 'react-native-elements';
import AppIcon from './AppIcon';
import Login from './Login';
import Logout from './Logout';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  }
});

function Navbar(props) {
  return (
    <View style={styles.container}>
      {props.currentView === "top" ? (
        <Header
          leftComponent={
            <AppIcon />
          }
          rightComponent={
            <Login setCurrentView={props.setCurrentView} />
          }
        />) : (
          <Header
            leftComponent={
              <AppIcon />
            }
            rightComponent={
              <Logout
                setCurrentView={props.setCurrentView}
                setText1={props.setText1}
                setText2={props.setText2}
                setText3={props.setText3}
              />
            }
          />
        )}
    </View>
  )
}

export default Navbar;