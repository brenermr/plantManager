import React from "react";
import Routes from './src/routes/'
import AppLoading from "expo-app-loading";
import {
  useFonts, 
  Jost_400Regular, 
  Jost_700Bold, 
  Jost_500Medium
} from '@expo-google-fonts/jost'
import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";


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
      <ThemeProvider theme={theme}>
          <Routes/>
      </ThemeProvider>
    )
  }
}

