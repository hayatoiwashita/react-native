import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button, Input } from 'react-native-elements';
import Navbar from './components/Navbar';

export default function App() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [currentView, setCurrentView] = useState("top")

  return (
    <View style={styles.containar}>
      <Navbar 
        setCurrentView={setCurrentView}
        currentView={currentView}
        setText1={setText1}
        setText2={setText2}
        setText3={setText3}
      />
      {currentView === "top" ? (
        <Text style={styles.message}>
          ようこそ
        </Text>
      ) : (
          <Card title="今日の3つの良いことを投稿しよう">
            <Input
              value={text1}
              label="1"
              onChangeText={(text1) => { setText1(text1) }}
            />
            <Input
              value={text2}
              label="2"
              onChangeText={(text2) => { setText2(text2) }}
            />
            <Input
              value={text3}
              label="3"
              onChangeText={(text3) => { setText3(text3) }}
            />
            <Button
              title="投稿"
              buttonStyle={{ marginTop: 30 }}
              borderRadius={20}
              onPress={() => {
                alert("Great!!");
              }}
            />
          </Card>
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  message: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
  }
});
