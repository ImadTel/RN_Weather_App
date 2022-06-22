import { View, Text,StyleSheet, ScrollView,Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'


import {ActivityIndicator} from 'react-native';
 import axios from 'axios';
import InfoSlice from './InfoSlice';

import {weatherApiKey} from '@env'

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
    .get('http://api.weatherapi.com/v1/astronomy.json?key='+weatherApiKey+'&q='+request+'&dt='+actualDate)
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

      

const {height, width} = Dimensions.get('window');


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
        <Text style= {{...styles.textInfos, fontSize:26}}>Astronomy Infos</Text>
        <Text style= {{...styles.textInfos, fontSize:16, maxWidth:'70%',color:'grey'}}>{request}</Text>
      </View>

      <View style={{flex:0.7,justifyContent:'center',alignItems:'center',width:'100%', backgroundColor:'black',}}>
         <View style={styles.infoArea}>
          <View  style={{opacity:0.5,position:'absolute',bottom:0, top:0,height:'100%' ,width:'100%', zIndex:-1,flex:1, alignItems:'center',justifyContent:'center', }} >
          <Image  source={require('../assets/icons/Astronomy.png') }    
          style={{ resizeMode:'contain', 
          width:150 , height:150, zIndex:-1, }}     />
          </View>
           <View style={styles.row}>
             <Text style= {styles.textInfos}>Sun rise</Text>
             <Text style={styles.textInfos}>{data?.astro?.sunrise }</Text>
           </View>

           <View style={{height:1, width:'70%',marginVertical:8, borderColor:'black',borderWidth:1 }}></View>

           <View style={styles.row}>
             <Text style= {styles.textInfos}>sunset</Text>
             <Text style={styles.textInfos}>{data?.astro?.sunset}</Text>
           </View>
            
           <View style={{height:1, width:'70%',marginVertical:8, borderColor:'black',borderWidth:1 }}></View>

           <View style={styles.row}>
             <Text style= {styles.textInfos}>Moon rise</Text>
             <Text style={styles.textInfos}>{data?.astro?.moonrise }</Text>
           </View>

            <View style={{height:1, width:'70%',marginVertical:8, borderColor:'black',borderWidth:1 }}></View>

           <View style={styles.row}>
             <Text style= {styles.textInfos}>Moon set</Text>
             <Text style={styles.textInfos}>{data?.astro?.moonset }</Text>
           </View>

           <View style={{height:1, width:'70%',marginVertical:8, borderColor:'black',borderWidth:1 }}></View>

           <View style={styles.row}>
             <Text style= {styles.textInfos}>Moon phase</Text>
             <Text style={styles.textInfos}>{data?.astro?.moon_phase }</Text>
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


export default Astronomy