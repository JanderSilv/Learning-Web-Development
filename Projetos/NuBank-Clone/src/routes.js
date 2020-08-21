import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '~/src/pages/Main';

const Routes = () => {
    const AppStack = createStackNavigator();

    return (
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen
                    name="Main"
                    options={{
                        headerShown: false,
                    }}
                    component={Main}
                />
            </AppStack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;
