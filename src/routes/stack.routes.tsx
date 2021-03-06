import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import colors from '../../styles/colors';
import { Welcome } from '../pages/Welcome/';
import { UserIdentification } from '../pages/UserIdentification/';
import { ConfirmationScreenApp } from '../pages/Confirmation/';
import { PlantSelect } from '../pages/PlantSelect';

const stackRoutes = createNativeStackNavigator();

const AppRoutes : React.FC = () => (
    <stackRoutes.Navigator
        screenOptions={{
            headerShown:false,
            cardStyle:{
                backgroundColor: colors.white
            },
        }}
    >
        <stackRoutes.Screen
            name='Welcome'
            component={Welcome}
        />
        <stackRoutes.Screen
            name='UserIdentification'
            component={UserIdentification}
        />        
        <stackRoutes.Screen
            name='Confirmation'
            component={ConfirmationScreenApp}
        />
        <stackRoutes.Screen 
            name='PlantSelect'
            component={PlantSelect}
        />
    </stackRoutes.Navigator>
)

export default AppRoutes;