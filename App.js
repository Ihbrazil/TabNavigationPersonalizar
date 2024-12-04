import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TelaInicial from "./componentes/TelaInicial";
import TelaSobre from "./componentes/TelaSobre";

const Tabs = createBottomTabNavigator();

export default function App () {
  return (
    <NavigationContainer >
      <Tabs.Navigator>
        <Tabs.Screen name="Início" component = { TelaInicial }/>
        <Tabs.Screen name="Sobre" component = { TelaSobre } />
      </Tabs.Navigator>
    </NavigationContainer>
  )
};
