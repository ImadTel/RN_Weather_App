import React, { useState,  } from 'react'

import {AotoComplete_Api_Key }from '@env';


import {
  Text,

  ImageBackground,
  StyleSheet,
  View,
  Keyboard,
  Dimensions,
} from 'react-native';




import NavBar from '../components/NavBar';
const apiKey = '';
import WeatherInfos from '../components/WeatherInfos';

import Astronomy from '../components/Astronomy';

import AutoComplete from '../components/AutoComplete';

import TimeZone from '../components/TimeZone';

import SearchBar from '../components/SearchBar';



const HomeScreen = (props) => {






  // const {request} = useContext(AppContext);
  
  // const {screen} = useContext(AppContext);
  

  
  
  const [inputCity,setinputCity] = useState("");
  
  const  [screen,setScreen] = useState("");
  const [request,setRequest] = useState("");
  
 
  const [locations,setLocations] = useState([]);

  const [loading,setLoading] = useState(false);


    const showInfos = ( ) =>{


     // console.log("show Info called Ie componenet rerendered.....",inputCity,request,loading,locations.length,);

      if( request!="" && screen=="Astronomy") { return(
        <View  style={{marginTop:25, flex:1,alignItems:'center',justifyContent:'center'}}>
           <Astronomy  request={request} />
        </View>
       
      )
      }
      if (  screen=="Time Zone" && request!=""  ) {return (
        <View  style={{marginTop:25, flex:1,alignItems:'center',justifyContent:'center'}}>
        <TimeZone  request={request} />
     </View>
        
       )}

     if (  screen=="Weather" &&request!=""  ) {return (
      
    <WeatherInfos request={request} />

     )



    };
  
  
    return(<View style={{flex:1, backgroundColor:'white',width:'100%'}}>
      </View>
       )
  }

  return  (
    
    <ImageBackground  style={[styles.fixed,styles.container,{backgroundColor:'rgba(30,30,30,0.8)'} ]}   >
    <View  style={styles.container} >

  <SearchBar inputCity={inputCity} 
             setinputCity={setinputCity}
             setScreen={setScreen}
             setRequest={setRequest} 
             locations={locations}
             setLocations= {setLocations} 
             loading={loading}
             setLoading={setLoading}  />


  <AutoComplete inputCity={inputCity} 
                setScreen={setScreen} 
                setinputCity={setinputCity}
                   setRequest={setRequest}
                   locations={locations}
                   setLocations= {setLocations}
                   loading={loading}
                   setLoading={setLoading}
                      / >


   <NavBar  screen={screen}
            request={request} 
            setScreen={setScreen}  />


  <View   style={{flex:1,width:'100%', justifyContent:'center',alignItems:'center'}}> 
  {showInfos()}
  </View> 

        
    </View>
  
      </ImageBackground>
  );
};

const styles = StyleSheet.create({

    
      fixed: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      },
      container:{
        width: Dimensions.get("window").width, 
        height: Dimensions.get("window").height,
        backgroundColor:'rgba(240,240,240,1)',
        
        
    },
    

 


  icon:{
    position:'relative',
    bottom:0
  },
  WeatherInfos:{
    flex:1,
    maxHeight:140,
    minWidth:140,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'flex-start',
    

    
  },
  infos:{
    fontSize:50,
    color:'white'
  },
  btn:{
    marginVertical:20,
     height:50,
     width:140,
     maxWidth:180,
     borderColor:'grey',
     borderWidth:1,
     borderRadius:15,
     flex:1,
     alignItems:'center',
     justifyContent:'center',
     backgroundColor:'rgba(27, 48, 73, 0.5)'
  }

});
  
  



export default HomeScreen;




