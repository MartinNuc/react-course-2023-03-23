import './App.css';
import {AutoCounter} from './use-effect/AutoCounter';
import {useState, useCallback} from 'react';
import {Dropdown} from './dropdown/Dropdown';
import {Table} from './table/Table';
import {MousePosition} from './use-effect/MousePosition'
import {Theme} from './context-theme/theme';
import {Joke} from './api-requests/Joke';
import React, {useMemo} from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import {JokeCategories} from './api-requests/JokeCategories';
import {RegistrationForm} from './form/registration';

export const ThemeContext = React.createContext('light');

function App() {
  const [theme, setTheme] = useState('light');
  const themeContextValue = useMemo(() => ({
    currentTheme: theme,
    toggle: () => setTheme(theme === 'light' ? 'dark' : 'light')
  }), [theme]);

  const onDropdownOpened = useCallback(function() {
    console.log('opened');
  }, []);

  return <ThemeContext.Provider value={themeContextValue}>
    <BrowserRouter>

      <Link to="/">Home</Link>
      <Link to="/joke-only">Joke only</Link>
      <Link to="/registration">Registration</Link>

      <Theme />
      <Dropdown onDropdownOpened={onDropdownOpened} />
      <Joke />

      <Routes>
        <Route path="/" element={<JokeCategories />} />
        <Route path="/joke-only" element={null} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/categories/:category" element={<Joke />} />
      </Routes>
    </BrowserRouter>

  </ThemeContext.Provider>;
}

export default App;
