import React from 'react';

import { Container, Top, Logo, Title } from './styles';

import { MaterialIcons } from '@expo/vector-icons';

import logo from '~/src/assets/Nubank_Logo.png';

export default function Header() {
    return (
        <Container>
            <Top>
                <Logo source={logo} />
                <Title>Jander</Title>
            </Top>
            <MaterialIcons name="keyboard-arrow-down" size={20} color="#FFF" />
        </Container>
    );
}
