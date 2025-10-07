import { Stack } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import React, {useState, useEffect} from 'react';

export default function StackLayout(){


    return(

        <Stack screenOptions={{headerShown: false}}
            
        >
            {/* <Stack.Screen
                name="App"
            >
            </Stack.Screen> */}
            <Stack.Screen 
                name="index"
            >
            </Stack.Screen>
            {/* <Stack.Screen
                name="about"
            >
            </Stack.Screen> */}

        </Stack>
    )
} 