import React, { useState, useEffect } from 'react';
import { 
    View, KeyboardAvoidingView,
    Text, TextInput, Image, 
    StyleSheet, TouchableOpacity,
    Platform, AsyncStorage,
} from 'react-native';

import api from '../services/api';

import logo from '../assets/logo.png';

export default function Login({ navigation }) {

    const [email, setEmail] = useState('');
    const [techs, setTechs] = useState('');

    /* Verificação de Login */
    useEffect(() => {
        AsyncStorage.getItem('user').then(user => {
            if (user) navigation.navigate('List');
        });
    }, []);
    
    function handleSubmit() {
        api.post('/sessions', {
            email
        }).then(async res => {
            console.log(res.data);
            
            const { _id } = res.data;

            await AsyncStorage.setItem('user', _id);
            await AsyncStorage.setItem('techs', techs);
            
            navigation.navigate('List');
        }).catch(error => {
            console.log('sessions => ' + error);
            
        });
    }

    return ( 
        <KeyboardAvoidingView enabled={Platform.OS === "ios"} behavior="padding" style={styles.container}>
            <Image source={logo} />

            <View style={styles.form}>

                <Text style={styles.label}>SEU E-MAIL *</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder="Seu e-mail"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmail}
                />

                <Text style={styles.label}>TECNOLOGIAS *</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Tecnologias de interesse"
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    value={techs}
                    onChangeText={setTechs}
                />

                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Encontrar Spots</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // faz com que o elemento oculpe todo o espaço da tela.
        justifyContent: 'center',
        alignItems: 'center',
    },

    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
    },

    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30,
    },

    input: {
        height: 44,
        marginBottom: 20,
        paddingHorizontal: 20,

        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 2,

        fontSize: 16,
        color: '#444',
    },

    button: {
        height: 42,
        
        borderRadius: 2,
        backgroundColor: '#f05a5b',
        
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
