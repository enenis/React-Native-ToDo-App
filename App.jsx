import React from 'react';
import {
  
  ScrollView,

  StyleSheet,
  Text,

  View,
  FlatList,
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
