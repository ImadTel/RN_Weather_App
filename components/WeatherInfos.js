import React from 'react'
import { View, Text,
    ActivityIndicator,
    ImageBackground,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
    SafeAreaView, } from 'react-native'


import axios from 'axios';
import { useState,useEffect, } from 'react';

import InfoSlice from './InfoSlice';

import ErrorScreen from '../components/ErrorScreen';
import Icon from '../assets/icons/icon1.svg';

import {weatherApiKey} from '@env'

const WeatherInfos = ({request}) => {

  




  //  const {request} = useContext(AppContext);

    const [data,setData] = useState([]);

    const [loading,setLoading] =useState(true)
  
    const [errorLoading,setErrorloading] = useState(false)
   

const getTheWether = async () =>{
     
    setErrorloading(false)
  if(request)   try{
        setLoading(true);
      const weather = await axios
      .get('http://api.weatherapi.com/v1/current.json?key='+ weatherApiKey+ '&q='+request+'&aqi=no')
       
       .then( (res) =>{
        setData(res.data.current);
        setErrorloading(false);
       }
        
       )
       setLoading(false);
       
    }
    catch (err){ 
             setErrorloading(true);
            }
            setLoading(false);
            
        }
    


    useEffect(() => {
        setLoading(true);
         console.log("the city:   ", request)
         getTheWether();
      //  setLoading(false);

         return () =>{

            setErrorloading(false);

         }
        }, [request]);


    if (loading && request!="" )  return (   
        <View    style={{flex:1,alignItems:'center',justifyContent:'center',height:200}}>
                 <ActivityIndicator  size="large" color="#00ff00" />
        </View>
)






    if(!errorLoading  && request!="") return(
        <React.Fragment>
  
     
         

        <View style={styles.WeatherInfos}>
  
       
        <View style={{flex:1,justifyContent:'space-between',alignItems:'flex-start' ,marginLeft:40 }}>
          <ScrollView  style={{maxHeight:65}}>
                      <Text style={{fontSize:24, color:'black',fontFamily:'Montserrat-SemiBold'}}>{request}</Text>
          </ScrollView>
         
         <Text style={styles.infos}>{data.temp_c}°</Text>
         <Text style={{fontSize:18, color:'black',fontFamily:'Montserrat-Regular'}}>{data?.condition?.text}</Text>
         </View>
  
         <View  style={{marginHorizontal:15,marginTop:20}}>
            {data?.condition?.icon?<Image  source={{uri:'http://'+data?.condition?.icon}} style={{height:80,width:80,resizeMode:'contain'}}  />:<View style={{height:80,width:80,resizeMode:'contain'}}></View>}
           
         </View>
  
        
  
         </View>


     
         {/* <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center', minHeight:60,maxHeight:60,marginTop:5,marginBottom:10}}>
         <TouchableOpacity  onPress={()=>{setLoadMore(!loadMore)}} style={styles.btn} >
               <Text style={{color:'white',fontSize:16}}>{loadTitle()}</Text>
         </TouchableOpacity>
        
         </View> */}

         <View style={{paddingTop:25,flex:1,justifyContent:'flex-start',alignItems:'center',width:'100%', backgroundColor:'black'}}>
         <View style={styles.infoArea}>
          <Image  source={require('../assets/icons/Weather.png') }    
          style={{position:'absolute', bottom:0,left:0, right:0,top:0, resizeMode:'contain', 
          width:'100%' , height:'100%', zIndex:-1, opacity:0.5}}     />
           <View style={styles.row}>
             <Text style= {styles.textInfos}>Humidity</Text>
             <Text style={styles.textInfos}>{data?.humidity }</Text>
           </View>

           <View style={{height:1, width:'70%',marginVertical:8, borderColor:'black',borderWidth:1 }}></View>

           <View style={styles.row}>
             <Text style= {styles.textInfos}>U V</Text>
             <Text style={styles.textInfos}>{data?.uv }</Text>
           </View>
            
           <View style={{height:1, width:'70%',marginVertical:8, borderColor:'black',borderWidth:1 }}></View>

           <View style={styles.row}>
             <Text style= {styles.textInfos}>Wind direction</Text>
             <Text style={styles.textInfos}>{data?.wind_dir }</Text>
           </View>

            <View style={{height:1, width:'70%',marginVertical:8, borderColor:'black',borderWidth:1 }}></View>

           <View style={styles.row}>
             <Text style= {styles.textInfos}>Wind Speed</Text>
             <Text style={styles.textInfos}>{data?.wind_kph }</Text>
           </View>

         </View>
         </View>
      
  
 


     </React.Fragment>
  
      )
      else if (errorLoading) return(
      
            <ErrorScreen  />
      )
      
       else return(
        <View></View>
      )
  
}




const styles = StyleSheet.create({

    

  topArea:{
    
      backgroundColor: 'rgba(27, 48, 73, 0.5)',
      borderRadius:7,
      minHeight:80,

  },


  bottom:{
       
    width:'100%',  
    //height:400,
    position: 'absolute',
    bottom:0,
    left:0,
    right:0,
    opacity:0.8,

    
},
icon:{
  position:'relative',
  bottom:0
},
WeatherInfos:{
  marginTop:0,
  flex:1,
  maxHeight:"30%",
  minHeight:130,

  width:"100%",
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'flex-start',
  marginBottom:10,  

},
infos:{
  fontSize:50,
  color:'black',
  fontFamily:'Montserrat-Regular'
},
btn:{
 
   height:50,
   maxHeight:50,
   minHeight:50,
   width:140,
   maxWidth:180,
   borderColor:'grey',
   borderWidth:1,
   borderRadius:15,
   flex:1,
   alignItems:'center',
   justifyContent:'center',
   backgroundColor:'rgba(27, 48, 73, 0.5)',

},
infoArea:{
  flex:3/5,
  justifyContent:'flex-start',
  alignItems:'center',
  zIndex:1,
  marginTop:10,
  
  shadowOffset:2,
  shadowColor:'black',
  marginBottom:5,
  width:'90%',
  borderRadius:5,
  paddingVertical:8,
  backgroundColor:'rgba(25,181,254,0.8)'

},
row:{
  flex:1,
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  width:'90%',
  paddingBottom:3,
  maxHeight:40,

},
textInfos:{
  fontFamily:'Montserrat-SemiBold',
  fontSize:18,
  color:'black',
  marginHorizontal:3,
},


});






export default WeatherInfos