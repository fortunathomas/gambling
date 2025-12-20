"use client"; // Se utilizzi useState o altri hook

import React from 'react';
import '../styles/globals.css';  // Assicurati di importare gli stili globali

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="it">
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>💎 Caccia al Tesoro</title>
        </head>
        <body>
        <header>
            <h1>💎 Caccia al Tesoro</h1>
        </header>
        <main>{children}</main>
        </body>
        </html>
    );
};

export default Layout;
