import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../pages/SignIn'; // Importando a tela de login
import Dashboard from '../pages/Dashboard'; // Verifique se o caminho está correto
import Order from '../pages/Order';
import FinishOrder from '../pages/FinishOrder';

export type StackPramsList = {
  SignIn: undefined; // Adicionando a tela de login aqui
  Dashboard: undefined;
  Order: {
    number: number | string;
    order_id: string;
  };
  FinishOrder: {
    number: number | string;
    order_id: string;
  };
};

const Stack = createNativeStackNavigator<StackPramsList>();

function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="SignIn" // Adicionando a tela de login
        component={SignIn} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Dashboard" 
        component={Dashboard} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen
        name="Order"
        component={Order}
        options={{ headerShown: false }} 
      />
      <Stack.Screen
        name="FinishOrder"
        component={FinishOrder}
        options={{
          title: 'Finalizando',
          headerStyle: {
            backgroundColor: '#1d1d2e',
          },
          headerTintColor: '#FFF',
        }} 
      />
    </Stack.Navigator>
  );
}

export default AppRoutes;
