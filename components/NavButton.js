import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedbackBase} from 'react-native'
import React, { useState } from 'react'






const NavButton = ({setRequest,setScreen,screen,request,title}) => {

 const tempRequest= request

  return (
    <TouchableOpacity  onPress={()=>{setScreen( title);
      //  setRequest(tempRequest);
        
     } } 
      style={{...styles.btn, backgroundColor: screen==title?'rgba(0,0,0,0.5)':'rgba(200,200,200,0.8)'}} >
      <Text style={{...styles.text,color:screen==title?'white':'black'}}>{title}</Text>
    </TouchableOpacity>
  )
}



const styles =StyleSheet.create({
    btn:{
        alignSelf:'center',
        flex:1,
        marginHorizontal:10,
        justifyContent:'center',
        alignItems:'center',
        width:120,
        height:26,
        borderRadius: 13,
        
        marginRight:3,
        //opacity:0.5,

    },
    text:{
        color:'black',
        fontSize:15,
    }
})

export default NavButton