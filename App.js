import React, { useState } from 'react';
import { View } from 'react-native';
import { Card, Button, Input } from 'react-native-elements';

export default function App() {
  const [text, setText] = useState("placeholder");

  return (
    <View style={{ flex: 1, paddingVertical: 80}}>
      <Card title="入力してください">
        <Input
          value={text}
          label="text1"
          onChangeText={(text) => { setText(text) }}
        />
        <Button
          title="Entry"
          buttonStyle={{ marginTop: 30 }}
          borderRadius={20}
          onPress={() => {
            alert(text);
          }}
        />
      </Card>
    </View>
  );
}
