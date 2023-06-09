import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Alterar from './app/screens/Alterar';
import Lista from './app/screens/Lista';
import Cadastro from './app/screens/Cadastro';
import UploadFoto from './app/screens/UploadFoto';
import CarouselCards from './app/screens/CarouselCards';
import LoginGoogle from './app/screens/LoginGoogle';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Google Login" component={LoginGoogle}/>
        <Stack.Screen name="Notícias" component={CarouselCards} />
        <Stack.Screen name="UploadFoto" component={UploadFoto} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Lista" component={Lista} />
        <Stack.Screen name="Alterar" component={Alterar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

