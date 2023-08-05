
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, Animated, StyleSheet } from 'react-native';


const SplashScreen = ({ navigation, props }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 10000,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim]);

    useEffect(() => {
        setTimeout(() => {
            getData()
        }, 3000);

    })

    const getData = async () => {
        navigation.navigate('Home')
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Animated.View // Special animatable View
                style={{
                    opacity: fadeAnim, // Bind opacity to animated value
                }}>
                <Image source={require('../assets/reactLogo.png')} style={{ height: 100, width: 100 }} />
            </Animated.View>
        </View>
    )
}

export default SplashScreen
