import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NavBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>POKEMON</Text>
    </View>
  )
}

export default NavBar

const styles = StyleSheet.create({
    container:{
        height:100,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#cc0000'
    },
    text:{
        marginTop:40,
        fontSize:27,
        fontWeight:'bold',
        color:'#ffde00'
    }
})