import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import NavBar from './NavBar'
import PokemonContent from './PokemonContent'

const App = () => {
const [search,setSearch] =useState('')

  return (
    <View style={styles.container}> 
      <NavBar search={search} setSearch={setSearch}/>
      <PokemonContent search={search}/>
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