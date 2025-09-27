import React from 'react';
import { View, Text, StyleSheet,FlatList,Image } from 'react-native';
import PokemonData from './pokedex.json'


const Items =({name,image,base})=>{
  return(
    <View style={styles.card}>
        <View style={styles.heading}><Text style={styles.headingText}> {name.english} - {name.japanese} </Text></View>
        <View style={styles.cardContainer}> 
        <View>
        <Image source={{uri:image}} style={styles.pokemonImage}/>
        </View>
   <View style={styles.powerContainer}>
  <View style={styles.powerView}>
    <Text style={styles.powerText}>HP :</Text>
    <Text style={styles.powerTextB}>{base.HP}</Text>
  </View>

  <View style={styles.powerView}>
    <Text style={styles.powerText}>Attack :</Text>
    <Text style={styles.powerTextB}>{base.Attack}</Text>
  </View>

  <View style={styles.powerView}>
    <Text style={styles.powerText}>Defense :</Text>
    <Text style={styles.powerTextB}>{base.Defense}</Text>
  </View>

  <View style={styles.powerView}>
    <Text style={styles.powerText}>Sp. Attack :</Text>
    <Text style={styles.powerTextB}>{base["Sp. Attack"]}</Text>
  </View>

  <View style={styles.powerView}>
    <Text style={styles.powerText}>Sp. Defense :</Text>
    <Text style={styles.powerTextB}>{base["Sp. Defense"]}</Text>
  </View>

  <View style={styles.powerView}>
    <Text style={styles.powerText}>Speed :</Text>
    <Text style={styles.powerTextB}>{base.Speed}</Text>
  </View>
</View>
        </View>
      
    </View>
  )
}


export default function PokemonContent({search}) {

  const filterData= search.length>0 ? PokemonData.filter((element,index)=>
   element.name.english.toLowerCase().includes(search.toLowerCase())
  ) : PokemonData;

const renderItem =({item}) =>{
  if (!item || !item.base) return null;
    return(
        <Items name={item.name} image={item.image.hires} base={item.base}/>
    )
}

  return (
    <View style={styles.container}>
      <FlatList
      data={filterData}
      renderItem={renderItem}
      keyExtractor={item=>item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  card:{

    borderColor:'black',
    borderWidth:1,
    padding:10,
    width:350,
    margin:20,
    backgroundColor:'#ffde00',
    borderRadius:25,
    paddingBottom:20
    
  },
  heading:{
 
    alignItems:'center',
    justifyContent:'flex-start',
    marginBottom:20
  },
  headingText:{
    fontWeight:'bold',
    fontSize:20,
    color:'#cc0000',
    fontSize:20
  },
  pokemonImage:{
    height:150,
    width:150,
    resizeMode:'contain'
  },
  cardContainer:{
    flexDirection:'row'
  }
,
powerView:{
flexDirection:'row',
justifyContent:'space-between'
},
powerText:{
 
  fontSize:16,
  color:'#cc0000',
  fontWeight:'bold',

},
powerTextB:{
 fontSize:16,
  color:'#2f3da3ff',
  fontWeight:'bold',
  marginLeft:10
},
powerContainer:{
  justifyContent:'center',
  marginLeft:20
  
}

});