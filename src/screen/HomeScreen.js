import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Nodejs from '../Navigators/BottomNavigator/Nodejs';
import Reactjs from '../Navigators/BottomNavigator/Reactjs';
import ReactNative from '../Navigators/BottomNavigator/ReactNative';


const Bottom = createBottomTabNavigator()

const BottomTab = () => {
    return (
        <Bottom.Navigator>
            <Bottom.Screen
                name='React Js' component={Reactjs} options={{
                    headerShown: false, tabBarLabelStyle: {
                        fontWeight: "700",
                        fontSize: 15
                    }, tabBarIconStyle: { display: "none" }
                }}
            >
            </Bottom.Screen>

            <Bottom.Screen
                name='React Native' component={ReactNative} options={{
                    headerShown: false, tabBarLabelStyle: {
                        fontWeight: "700",
                        fontSize: 15
                    },
                    tabBarIconStyle: { display: "none" }
                }}
            >
            </Bottom.Screen>
            <Bottom.Screen
                name='Node Js' component={Nodejs} options={{
                    headerShown: false, tabBarLabelStyle: {
                        fontWeight: "700",
                        fontSize: 15
                    },
                    tabBarIconStyle: { display: "none" }

                }}
            >
            </Bottom.Screen>


        </Bottom.Navigator>
    )

}
export default BottomTab