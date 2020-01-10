import React from 'react';
import { 
    View, KeyboardAvoidingView,
    Text, TextInput,
    Image, StyleSheet, TouchableOpacity,
    Platform,
} from 'react-native';

import logo from '../assets/logo.png';

// import { Container } from './styles';

export default function Login() {
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
                />

                <Text style={styles.label}>TECNOLOGIAS *</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Tecnologias de interesse"
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                />

                <TouchableOpacity style={styles.button}>
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
