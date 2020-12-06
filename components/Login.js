import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from 'react-native-elements';

function Login(props) {
  const login = () => {
    props.setCurrentView('home');
  }
  
  return (
    <View style={styles.container}>
      <Button
        title='login'
        onPress={login}
        style={styles.button}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});

export default Login;