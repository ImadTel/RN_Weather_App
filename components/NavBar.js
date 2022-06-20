import { View, Text,StyleSheet, FlatList } from 'react-native'
import React from 'react';
import NavButton from './NavButton';



const NavBar = ({screen,setScreen,setRequest,request}) => {

const list=[{
    id:1,
   title:"Weather",

},
{
    id:2,
    title:"Astronomy",

},
{
    id:3,
    title:"Time Zone",

},

];


const renderNavbar= (data) =>{

    return(
       < NavButton screen={screen} 
       setScreen={setScreen} 
        request={request} 
        setRequest={setRequest}
         title={data.item.title} />
    )
}


  return (
    <View  style={styles.list} >
        <FlatList    horizontal   data={list}   keyExtractor={item=> item.id}   renderItem={renderNavbar} />
    </View>
  )
}


const styles= StyleSheet.create({
    list:{
        maxHeight:50,
        paddingHorizontal:5,
        backgroundColor:'rgba(20,50,25,0.5)',
        flex:1,
        alignItems:'center',
        justifyContent:'center',



   
    }
})


export default NavBar