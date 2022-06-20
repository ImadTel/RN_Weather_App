import { StyleSheet, Text, View,TextInput,TouchableOpacity,Keyboard } from 'react-native'
import React , {useRef} from 'react'

import tw from 'twrnc';

import Logo from  '../assets/icons/logo.svg'




const SearchBar = ({inputCity,setinputCity,setLocations,setRequest,setScreen,setLoading}) => {

    const inputState = useRef(null);


   

 const submit = ( )  =>{
    setLocations([]);
    Keyboard.dismiss();
    if(inputCity=="") inputState.current.focus();
    setScreen("Weather");
    setRequest(inputCity);
    
    
    
  }


  return (
    <View style={[tw`flex-row  px-2 mt-2   items-center mb-1`,styles.topArea]} >
   
    <Logo height='50' width='50'  style={tw`text-lg text-black mx-2 `}/>
   

   <TextInput onSubmitEditing={()=>{if(!inputCity || inputCity.length==0) Keyboard.dismiss();  submit()} } 
    placeholder="enter a city name" 
     placeholderTextColor='white' style={styles.input}  
      onChangeText={(text=>{
         if(text=="") {setRequest(""); setScreen("")}
        setinputCity(text); 
        setLocations([]);
        setLoading(true);
        
    
         })}
       ref={inputState}  
       value={inputCity}
       
         >

    </TextInput>


   <TouchableOpacity   onPress={()=>{ setLocations([]);submit()}} 
   style={[styles.searchButton,tw`flex-col bg-transparent text-white justify-center`]}>
      <Text style={tw`text-white m-2`}   >search</Text>
   </TouchableOpacity>
    

  
   </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    input: {
        color:'white',
        marginLeft:5,
        width:'60%',
        height: 40,
        margin: 10,
        borderWidth: 1,
        borderColor:'white',
        padding: 5,
        borderRadius:12,
        flex:1,
        alignItems:'center',
        justifyContent:'center'
        
      },
  
      topArea:{
        
          backgroundColor: 'rgba(27, 48, 73, 0.5)',
          borderRadius:2,
          minHeight:80,
  
      },
      searchButton:{
        borderColor:'white',
        borderRadius:5,
        borderWidth:1,
        color:'white'
    },
})