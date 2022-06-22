import { View, Text,Image ,TouchableOpacity} from 'react-native';
import React from 'react';

const ErrorScreen = () => {
  return (
    <View  style= {{flex:1, justifyContent:'flex-start' ,alignItems:'flex-start', marginLeft:40,marginTop:40}}> 
    <Text style={{fontFamily:'Montserrat-SemiBold',fontSize:18,color:'black', marginBottom:30}} >Something went wrong...</Text>

    <View style={{flex:1,flexDirection:'row', maxHeight:30,alignItems:'center' }}>
    <Image  source={require('../assets/icons/ok.png')}  style={{width:15 ,height:15,marginLeft:15}}/>
        <Text style={{fontFamily:'Montserrat-Regular',fontSize:16,color:'black',paddingLeft:20}} >verify the city name</Text>
    </View>


    <View style={{flex:1,flexDirection:'row',maxHeight:30,alignItems:'center'}}>
        <Image  source={require('../assets/icons/ok.png')}  style={{width:15 ,height:15,marginLeft:15}}/>
         <Text style={{fontFamily:'Montserrat-Regular',fontSize:16,color:'black',paddingLeft:20}} >Check your network connection</Text>
    </View>
 
    
   
    
    
    
    
</View>
  )
}

export default ErrorScreen;