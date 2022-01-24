import React from 'react';

export const themes = {
    light: {
        primary : '#146F93',
        light : '#fff',
        dark : '#010606',
        darkText: '#595959',
        btnPrimaryNormal : '#EFC11D',
        btnPrimaryHover : '#fff',
        btnPrimaryText : '#010606',
        btnSecondaryNormal : '#146F93',
        btnSecondaryHover : '#010606',
        btnSecondaryText : '#fff',
    },
};

export const ThemeContext = React.createContext(
    themes.light // default value
);