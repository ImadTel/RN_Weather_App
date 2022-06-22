import React from 'react';
import {Text,View,StyleSheet} from 'react-native';




function InfoSlice({title,value}) {
  
  const checkValue = () =>{
    if (typeof value === 'undefined'  && value!=null) return ("----")
    else return value 
  }


  return (
    <View style={styles.slice}>
        <Text  style={styles.title}>{title}</Text>
        <Text style={styles.title}>{checkValue()}</Text>

    </View>
  )
}


const styles= StyleSheet.create({
    slice:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:15,
        backgroundColor: 'rgba(25,34,0,0.5)',
        borderWidth:2,
        borderColor:'white',
        height:45,
        marginBottom:10,
        marginHorizontal:5,
        borderRadius:5,
    },
    title:{
      fontSize:15,
      color:'white',
      fontFamily:'Montserrat-Regular'
      

    }
})






export default InfoSlice