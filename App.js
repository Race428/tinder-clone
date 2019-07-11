import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native' 
import TinderClone from './src/TinderClone.js'


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>


      
      <TinderClone/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',

  }
})

