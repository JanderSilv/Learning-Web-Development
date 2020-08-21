import React from 'react';
import { ThemeProvider } from 'styled-components';

const wrapRootElement = ({ element }) => {
    return <ThemeProvider>{element}</ThemeProvider>;
};

export default wrapRootElement;
