import React from 'react'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../pages/SignIn'; // Ajuste o caminho conforme necessário
import Dashboard from '../pages/Dashboard'; // Ajuste o caminho conforme necessário

const Stack = createNativeStackNavigator();

function AuthRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="SignIn"
                component={SignIn} 
                options={{ headerShown: false }} 
            />
            <Stack.Screen 
                name="Dashboard" 
                component={Dashboard} 
                options={{ headerShown: false }} // Se você não quiser mostrar o cabeçalho
            />
        </Stack.Navigator>
    );
}

export default AuthRoutes;
