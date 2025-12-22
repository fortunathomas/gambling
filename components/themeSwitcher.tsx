"use client";

import { useState } from 'react';

const themes = ['default', 'dark', 'neon', 'forest', 'sunset', 'ocean'];

const ThemeSwitcher = () => {
    const [currentTheme, setCurrentTheme] = useState('default');

    const handleThemeChange = (theme: string) => {
        setCurrentTheme(theme);
        document.documentElement.setAttribute('data-theme', theme);
    };

    return (
        <div id="theme-switcher">
            <button id="theme-button" aria-label="Cambia tema">🎨</button>
            <div id="theme-menu" className="hidden">
                {themes.map((theme) => (
                    <button key={theme} onClick={() => handleThemeChange(theme)}>
                        <span>{theme}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ThemeSwitcher;
