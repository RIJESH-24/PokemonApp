import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavBar from './NavBar'
import PokemonContent from './PokemonContent'

const App = () => {
  return (
    <View style={styles.container}> 
      <NavBar />
      <PokemonContent />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#3b4cca'
  }
})