import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import React, { useState } from 'react'






const NavButton = ({setScreen,screen,request,item}) => {

 const tempRequest= request

  return (
    <TouchableOpacity  onPress={()=>{setScreen( item.title);
      //  setRequest(tempRequest);
        
     } } 
      style={{...styles.btn, backgroundColor: screen==item.title?'rgba(46, 204, 113,1)':'rgba(200,200,200,0.8)'}} >
        <Image  source={item.image} 
        style={{resizeMode:'contain' }}    width={30} height={30}   /> 
        
        <Text style={{...styles.text,color:screen==item.title?'white':'black'}}>{item.title}</Text>
      
    </TouchableOpacity>
  )
}



const styles =StyleSheet.create({
    btn:{ 
        alignSelf:'center',
        flex:1,
        flexDirection:'row',
        marginHorizontal:4,
        
        justifyContent:'center',
        alignItems:'center',
        width:128,
        height:40,
        borderRadius: 10,
        
        
        //opacity:0.5,

    },
    text:{
        color:'black',
        marginLeft:5,
        fontSize:14,
        fontFamily:'Montserrat-SemiBold'
    }
})

export default NavButton