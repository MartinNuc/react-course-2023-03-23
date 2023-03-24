import './App.css';
import {AutoCounter} from './use-effect/AutoCounter';
import {useState} from 'react';
import {Dropdown} from './dropdown/Dropdown';
import {Table} from './table/Table';
import {MousePosition} from './use-effect/MousePosition'
import {Joke} from './api-requests/joke';
import React from 'react';

export const ThemeContext = React.createContext('light');

function App() {
  const [theme, setTheme] = useState('light');
  const themeContextValue = {
    currentTheme: theme,
    toggle: () => setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return <ThemeContext.Provider value={themeContextValue}>
    <Joke />
  </ThemeContext.Provider>;
}

export default App;
