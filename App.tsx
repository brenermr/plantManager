import React from "react";
import { Welcome } from './src/pages/'
import AppLoading from "expo-app-loading";
import {
  useFonts, 
  Jost_400Regular, 
  Jost_700Bold, 
  Jost_500Medium
} from '@expo-google-fonts/jost'


export default function App(){
  const [fontsLoaded] = useFonts({
    Jost_400Regular, 
    Jost_700Bold, 
    Jost_500Medium
  });
  if(!fontsLoaded){
    return(
      <AppLoading/>
    )
  }else{
    return(
      <Welcome/>
    )
  }
}

