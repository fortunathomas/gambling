import React from 'react';
import '../styles/globals.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <header>
                <h1>💎 Caccia al Tesoro</h1>
            </header>
            <main>{children}</main>
        </div>
    );
};

export default Layout;
