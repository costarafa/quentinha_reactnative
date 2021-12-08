import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/native-stack';
import { Feather } from 'expo/vector-icons';
import {TouchableOpacity} from 'react-native';


import Home from './pages/Home';
import Detalhes from './pages/Detalhes';

const Stack = createStackNavigator();

function Rotas(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen
             name="home"
             component={Home}
             options= {{
                title: 'ENCOMENDE',
                headerTitleStyle: {
                  fontFamily: 'Montserrat_700Bold',
                headerRight: () => (                    
                    <TouchableOpacity>
                        <Feather
                         name= "shopping-bag"
                         size={24}
                         color= "black"
                        />
                    </TouchableOpacity>
                    
                     )
                 }
             }}
             />
            <Stack.Screen
             name="detalhes"
             component={Detalhes}
            />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Rotas;