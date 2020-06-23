// import Splash from './pages/Splash'
// import {Splash, GetStarted} from './pages';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Router from './router';
import FlashMessage from "react-native-flash-message";
import { Loading } from './components';

const App = () => {
  return (
    <>
    <NavigationContainer>
        <Router />
    </NavigationContainer>
    <FlashMessage position="top" />
    </>
  );
};

export default App

