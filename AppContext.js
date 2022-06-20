import { View, Text } from 'react-native'
import React from 'react';
import { createContext,useState } from 'react';





const RequestContext = createContext();
 

export function AppContextProvider ({children})  {


  return (
           
  <RequestContext.Provider    > {children}  </RequestContext.Provider>
  )
}





export default RequestContext;