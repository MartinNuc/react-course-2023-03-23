import './App.css';
import {AutoCounter} from './use-effect/AutoCounter';
import {useState} from 'react';
import {Dropdown} from './dropdown/Dropdown';
import {Table} from './table/Table';
import {MousePosition} from './use-effect/MousePosition'
import {Joke} from './api-requests/Joke';
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import {JokeCategories} from './api-requests/JokeCategories';

export const ThemeContext = React.createContext('light');

function App() {
  const [theme, setTheme] = useState('light');
  const themeContextValue = {
    currentTheme: theme,
    toggle: () => setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return <ThemeContext.Provider value={themeContextValue}>
    <BrowserRouter>

      <Link to="/">Home</Link>

      <Routes>
        <Route path="/" element={<JokeCategories />} />
        <Route path="/categories/:category" element={<Joke />} />
      </Routes>
    </BrowserRouter>

  </ThemeContext.Provider>;
}

export default App;
