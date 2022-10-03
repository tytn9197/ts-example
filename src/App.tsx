import React, { useState } from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import ErrorBoundary from './ErrorBoundary';

const NewComp = (props: {text: string; label?: string}) => {
  const {text, label} = props;
  // throw Error("ERRORRRRRR!!!")
  return (
    <View>
      <Text>{label ? `${label}:` : ''}</Text>
      <Text>{text}</Text>
    </View>
  );
};

interface Data {
  data?: boolean;
  role?: "user" | "admin"
}

interface Val {
  abc: Data | null
}

const App = () => {
  const [val, setVal] = useState<Val>({
    abc: null
  })

  let myRole = val.abc?.role 

  const aFunction : () => void = () => {}

  return (
    <SafeAreaView>
      <ErrorBoundary>
        <Text>TY TN</Text>
        <NewComp text="12313" />
        <NewComp text="11111" label="tytn"/>
      </ErrorBoundary>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
