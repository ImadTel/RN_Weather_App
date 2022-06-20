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
import { useState,useEffect,useRef } from 'react';

import InfoSlice from './InfoSlice';

import ErrorScreen from '../components/ErrorScreen';
import Icon from '../assets/icons/icon1.svg';

import { useContext } from 'react';
import AppContext from '../AppContext';

const WeatherInfos = ({request}) => {

  




  //  const {request} = useContext(AppContext);

    const [data,setData] = useState([]);

    const [loading,setLoading] =useState(true)
  

    const [loadMore,setLoadMore] = useState(false)


    const [errorLoading,setErrorloading] = useState(false)
   






    const loadTitle = () =>{
        if(!loadMore) return 'Load more infos';
        else return 'Less infos'
      }


    const loadMoreInfo = () =>{
       if ( loadMore){
          return (
            <React.Fragment>
              <InfoSlice title ="humidity" value={data.humidity} />
              <InfoSlice title ="U v" value={data.uv} />
              <InfoSlice title ="Wind direction" value={data.wind_dir} />
              <InfoSlice title ="Wind direction" value={data.wind_dir} />
              <InfoSlice title ="Wind speed (km/H)" value={data.wind_kph} />
              <InfoSlice title ="Wind speed (km/H)" value={data.wind_kph} />
              <InfoSlice title ="Wind direction" value={data.wind_dir} />
              <InfoSlice title ="Wind direction" value={data.wind_dir} />
              <InfoSlice title ="Wind speed (km/H)" value={data.wind_kph} />
              <InfoSlice title ="Wind speed (km/H)" value={data.wind_kph} />
          </React.Fragment>
   
          )
        }
       }


const displaySvg = () =>{
    if (loadMore ) return (
      <Icon   style={styles.bottom}   /> 
    )
}


const getTheWether = async () =>{
     
    setErrorloading(false)
  if(request)   try{
        setLoading(true);
      const weather = await axios
      .get('http://api.weatherapi.com/v1/current.json?key=65d05bfa95de4c97964124340221306&q='+request+'&aqi=no')
       
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
         <Text style={{fontSize:24, color:'white',}}>{request}</Text>
         <Text style={styles.infos}>{data.temp_c}°</Text>
         <Text style={{fontSize:18, color:'white',}}>{data?.condition?.text}</Text>
         </View>
  
         <View  style={{marginHorizontal:15,marginTop:20}}>
            {data?.condition?.icon?<Image  source={{uri:'http://'+data?.condition?.icon}} style={{height:80,width:80,resizeMode:'contain'}}  />:<View style={{height:80,width:80,resizeMode:'contain'}}></View>}
           
         </View>
  
        
  
         </View>


     
         <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center', minHeight:60,maxHeight:60,marginTop:5,marginBottom:10}}>
         <TouchableOpacity  onPress={()=>{setLoadMore(!loadMore)}} style={styles.btn} >
           <Text style={{color:'white',fontSize:16}}>{loadTitle()}</Text>
         </TouchableOpacity>
        
     </View>
     <ScrollView  style= {{marginTop:0, marginBottom:15,width:'100%'}}>

     {loadMoreInfo()}
  
     </ScrollView>


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
  flex:1,
  maxHeight:140,
  minHeight:130,

  minWidth:140,
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'flex-start',
  marginBottom:10,
  

  
},
infos:{
  fontSize:50,
  color:'white'
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

}

});






export default WeatherInfos