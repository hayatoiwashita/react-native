import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from 'react-native-elements';

function Logout(props) {
  const logout = () => {
    props.setCurrentView('top');
    props.setText1("");
    props.setText2("");
    props.setText3("");
  }
  
  return (
    <View style={styles.container}>
      <Button
        title='logout'
        onPress={logout}
        style={styles.button}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});

export default Logout;