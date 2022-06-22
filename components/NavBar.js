import { View, Text,StyleSheet, FlatList } from 'react-native'
import React from 'react';
import NavButton from './NavButton';



const NavBar = ({screen,setScreen,setRequest,request}) => {

const list=[{
    id:1,
   title:"Weather",
   image : require('../assets/icons/Weather.png')

},
{
    id:2,
    title:"Astronomy",
    image : require('../assets/icons/Astronomy.png'),
    

},
{
    id:3,
    title:"TimeZone",
    image : require('../assets/icons/TimeZone.png')

},

];


const renderNavbar= (data) =>{
      
    return(
       < NavButton screen={screen} 
       setScreen={setScreen} 
        request={request} 
        setRequest={setRequest}
         item={data.item} 
          />
    )
}


  return (
    <View  style={styles.list} >
        <FlatList   horizontal   data={list}   keyExtractor={item=> item.id}   renderItem={renderNavbar} />
    </View>
  )
}


const styles= StyleSheet.create({
    list:{
        maxHeight:50,
        paddingHorizontal:3,
        backgroundColor:'rgba(100,100,100,0.5)',
        flex:1,
        alignItems:'center',
        justifyContent:'center',



   
    }
})


export default NavBar