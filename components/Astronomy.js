import { View, Text,StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'


import {ActivityIndicator} from 'react-native';
 import axios from 'axios';
import InfoSlice from './InfoSlice';



const Astronomy = ({request}) => {


  const [data,setData] = useState();

  const [loading,setLoading] =useState(true)
  
  const [errorLoading,setErrorloading] = useState(false)


const getTheInfos = async () =>{


  const date = new Date();
  const actualDate = date.toISOString().split('T')[0]

     
  setErrorloading(false);
if(request)   try{
      setLoading(true);
    const weather = await axios
    .get('http://api.weatherapi.com/v1/astronomy.json?key=65d05bfa95de4c97964124340221306&q='+request+'&dt='+actualDate)
     .then( (res) =>{
      setData(res.data.astronomy);
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
           <InfoSlice  title="Sun rise"  value = {data.astro.sunrise}   ></InfoSlice>
           <InfoSlice  title="sunset"  value = {data.astro.sunset}   ></InfoSlice>
           <InfoSlice  title="Moon rise"  value = {data.astro.moonrise}   ></InfoSlice>
           <InfoSlice  title="Moon set"  value = {data.astro.moonset}   ></InfoSlice>
           <InfoSlice  title="Moon phase"  value = {data.astro.moon_phase}   ></InfoSlice>
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


export default Astronomy