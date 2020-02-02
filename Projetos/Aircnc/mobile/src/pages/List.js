import React, { useState, useEffect } from 'react'
import { 
    View, Text, 
    StyleSheet, Image, AsyncStorage } from 'react-native';

import logo from '../assets/logo.png';

export default function List() {

    const [techs, setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storagedTechs => {
            const techsArray = storagedTechs.split(',').map(tech => tech.trim());

            setTechs(techsArray);
        });
    }, []);

    return (
        <View style={StyleSheet.container}>
            <Image source={logo} />
        </View>
    );
}

const styles = StyleSheet.create({
    containert: {
        flex: 1,
    },
});
