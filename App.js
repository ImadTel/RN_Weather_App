/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import HomeScreen from './Screens/HomeScreen';

import store from './store'
import { Provider } from 'react-redux'
import {AppContextProvider} from './AppContext';




const App =  () => {

  return (

             
                    <HomeScreen/>

  );
};


export default App;
