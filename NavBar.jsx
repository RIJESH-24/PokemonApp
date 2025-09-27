import { StyleSheet, Text, View ,TextInput} from 'react-native'
import React from 'react'

const NavBar = ({search,setSearch}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>POKEMON</Text>
      <TextInput style={styles.textInput} placeholder='Search'  value={search}
      onChangeText={(text) => setSearch(text)}/>
    </View>
  )
}

export default NavBar

const styles = StyleSheet.create({
    container:{
        height:140,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#cc0000'
    },
    text:{
        marginTop:40,
        fontSize:27,
        fontWeight:'bold',
        color:'#ffde00'
    },
    textInput:{
      backgroundColor:'#c36767ff',
      width:300,
      borderRadius:30,
      
    }
})