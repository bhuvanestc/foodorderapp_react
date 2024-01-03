import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Cart from './components/Cart';
import { CartProvider } from 'react-use-cart';

const App = () => {
    const [theme, setTheme] = useState('light'); 
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    const appStyle = {
        backgroundColor: theme === 'dark' ? '#333' : '#fff', 
        color: theme === 'dark' ? '#fff' : '#333', 
        transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out'
    };

    
    return (
        
    <div style={appStyle}>
    <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
            <CartProvider>
            <Home/>
            <Cart/>
            </CartProvider>
        </div>
        
    );
};

export default App;


