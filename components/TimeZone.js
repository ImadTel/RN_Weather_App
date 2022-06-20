import { View, Text,StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'


import {ActivityIndicator} from 'react-native';
 import axios from 'axios';
import InfoSlice from './InfoSlice';



const TimeZone = ({request}) => {
    const [data,setData] = useState();
  
    const [loading,setLoading] =useState(true)
    
    const [errorLoading,setErrorloading] = useState(false)
  
  
  const getTheInfos = async () =>{
  
  
    setErrorloading(false);
  if(request)   try{
        setLoading(true);
  
     
      const weather = await axios
      .get('http://api.weatherapi.com/v1/timezone.json?key=65d05bfa95de4c97964124340221306&q='+request)
       
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
        <ScrollView  style={{width:'100%'} }>
             <InfoSlice  title="Name"  value = {data?.location?.name}   ></InfoSlice>
             <InfoSlice  title="Region"  value = {data?.location?.region}   ></InfoSlice>
             <InfoSlice  title="Country"  value = {data?.location?.country}   ></InfoSlice>
             <InfoSlice  title="local Date"  value = {data?.location?.localtime.split(' ')[0]}   ></InfoSlice>
             <InfoSlice  title="local Time"  value = {data?.location?.localtime.split(' ')[1]}   ></InfoSlice>

        </ScrollView>
        
      </View>
    )
  
  
  }
  
  
  
  const styles = StyleSheet.create({
      container:{
          flex:1,
         // maxHeight:140,
         // minHeight:130,
      
          minWidth:140,
          flexDirection:'row',
          justifyContent:'center',
          alignItems:'flex-start',
          marginBottom:10,
  },
  }
  );

export default TimeZone

