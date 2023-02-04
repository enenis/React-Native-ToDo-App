import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Header from './components/Header';

import Footer from './components/Footer';

function App(props) {
  
  return (
    <View style={styles.container}>
      <Footer />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
