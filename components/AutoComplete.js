import { StyleSheet, Text, View,FlatList,TouchableOpacity,ActivityIndicator , Keyboard} from 'react-native'
import React from 'react';
import { useEffect,useState } from 'react';















const AutoComplete = ({inputCity,setinputCity,setRequest,setScreen, locations,setLocations, loading,setLoading}) => {

  







    useEffect(()=>{
    
        const requestOptions = {
          method: 'GET',
        };
        console.log('inside fetch loading :  ', loading);
        console.log("use Effect is called.....",inputCity);
        if (inputCity.length>1 && loading ) {
    
         
          const timer1 =  setTimeout(()=>{
          
            const search =    fetch("https://api.geoapify.com/v1/geocode/autocomplete?text="+ inputCity+"&apiKey=0455e4591169413ea285e323a64f457e", requestOptions)
            .then(response => response.json())
            .then(result =>{
                            setLocations(result?.features);
                            setLoading(false);
                            console.log('result of : ', inputCity )
            } )
            .catch(error => {setLoading(false);console.log('error', error)});
              },600);
            
              return ()=>{
               // fetchController.abort();
                console.log('................aborted from useEffect')
               clearTimeout(timer1);
               setLocations([])
               }
            
            }
        else {setLocations([]); setLoading(false);}
        
         
    
      },[inputCity])


      const  renderRow = (item) =>{
        // console.log(item?.item?.properties);
         return(
          
           <TouchableOpacity   onPress={()=>{
             setLocations([]);
             Keyboard.dismiss();
             setinputCity(()=>item?.item?.properties?.formatted);
             const currentCity = item?.item?.properties?.city && item?.item?.properties?.city!= item?.item?.properties?.state
              ? item?.item?.properties?.city+", ":""
             setRequest(()=> currentCity +item?.item?.properties?.state + ', '+item?.item?.properties?.country );
             setScreen('Weather');
              
             setLoading(false) } } 
       
             style={{height:40,backgroundColor:'rgba(200,200,200,0.8)',marginTop:2,flex:1,justifyContent:'center' }}
             >
               <Text  style={{fontSize:13,color:'black', marginLeft:15}} >{item?.item?.properties?.formatted}</Text>
           </TouchableOpacity>
           
         )
       }



      const setAutoCompleteList = () =>{
        if (locations!=[] && !loading){
          
          return(
            <View   style={{ backgroundColor:'transparent', maxHeight:180}}>
              <FlatList
              
              data={locations}
              keyExtractor={(item) =>item?.index}
              renderItem={renderRow}
              />
      
             
            </View>
          )
        }
    //    else  if (loading) return(
    //     <View style={{height:40, backgroundColor:'grey'}}>
    //            <ActivityIndicator  color={'red'} size={'large'} />
    //     </View>
      
    //    )
      
        return(
        <View style={{}}>
                
        </View>
       )
      
       }



  return (
  setAutoCompleteList()
  )
}

export default AutoComplete

const styles = StyleSheet.create({})