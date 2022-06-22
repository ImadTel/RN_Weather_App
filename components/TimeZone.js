import { View, Text,StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'


import {ActivityIndicator} from 'react-native';
 import axios from 'axios';
import InfoSlice from './InfoSlice';

import {weatherApiKey} from '@env';



const TimeZone = ({request}) => {
    const [data,setData] = useState();
  
    const [loading,setLoading] =useState(true)
    
    const [errorLoading,setErrorloading] = useState(false)
  
  
  const getTheInfos = async () =>{
  
  
    setErrorloading(false);
  if(request)   try{
        setLoading(true);
  
     
      const timezone = await axios
      .get('http://api.weatherapi.com/v1/timezone.json?key='+weatherApiKey+'&q='+request)
       
       .then( (res) =>{
        setData(res.data);
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
  
  useEffect(()=>{
    getTheInfos();
   return(()=>{
    setErrorloading(false)
   }) 
  },[request])

  if (loading && request!="" )  return (   
    <View    style={{flex:1,alignItems:'center',justifyContent:'center',height:200}}>
             <ActivityIndicator  size="large" color="#00ff00" />
    </View>
  )
  
    return (
      <View   style={styles.container}>
      


        <View  style= {{flex:0.2,height:50,justifyContent:'center',marginTop:10}}>
        <Text style= {{...styles.textInfos, fontSize:26}}>Time Zone Infos</Text>
        <Text style= {{...styles.textInfos, fontSize:16, maxWidth:'70%',color:'grey'}}>{request}</Text>
      </View>

      <View style={{flex:0.7,justifyContent:'center',alignItems:'center',width:'100%', backgroundColor:'black',}}>
         <View style={styles.infoArea}>
          <View  style={{opacity:0.5,position:'absolute',bottom:0, top:0,height:'100%' ,width:'100%', zIndex:-1,flex:1, alignItems:'center',justifyContent:'center', }} >
          <Image  source={require('../assets/icons/TimeZone.png') }    
          style={{ resizeMode:'contain', 
          width:150 , height:150, zIndex:-1, }}     />
          </View>
           <View style={styles.row}>
             <Text style= {styles.textInfos}>Name</Text>
             <Text style={styles.textInfos}>{data?.location?.name} </Text>
           </View>

           <View style={{height:1, width:'70%',marginVertical:8, borderColor:'black',borderWidth:1 }}></View>

           <View style={styles.row}>
             <Text style= {styles.textInfos}>Region</Text>
             <Text style={styles.textInfos}>{data?.location?.region} </Text>
           </View>
            
           <View style={{height:1, width:'70%',marginVertical:8, borderColor:'black',borderWidth:1 }}></View>

           <View style={styles.row}>
             <Text style= {styles.textInfos}>Country</Text>
             <Text style={styles.textInfos}>{data?.location?.country}</Text>
           </View>


           <View style={{height:1, width:'70%',marginVertical:8, borderColor:'black',borderWidth:1 }}></View>

          <View style={styles.row}>
            <Text style= {styles.textInfos}>Local date</Text>
            <Text style={styles.textInfos}>{data?.location?.localtime.split(' ')[0]}</Text>
          </View>

          <View style={{height:1, width:'70%',marginVertical:8, borderColor:'black',borderWidth:1 }}></View>

          <View style={styles.row}>
            <Text style= {styles.textInfos}>Local time</Text>
            <Text style={styles.textInfos}>{data?.location?.localtime.split(' ')[1]}</Text>
          </View>



          

         </View>
         </View>
        
      </View>
    )
  
  
  }
  
  
  
  const styles = StyleSheet.create({
    container:{
        flex:1,
       // maxHeight:140,
       // minHeight:130,
        height:'100%',
        width:'100%',
     
        justifyContent:'space-between',
        alignItems:'center',
  
     
},    
infoArea:{
  flex:1,
  justifyContent:'flex-start',
  alignItems:'center',
  zIndex:1,
  maxHeight:"70%",
  shadowOffset:2,
  shadowColor:'black',
  width:'90%',
  borderRadius:5,
  paddingVertical:8,
  backgroundColor:'rgba(230,230,230,0.8)'

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
}
);

export default TimeZone

