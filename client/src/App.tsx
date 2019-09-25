import React from 'react';
import logo from './logo.svg';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import TopBar from './components/layouts/TopBar';
import ThemeContextProvider from './contexts/ThemeContext';

const App: React.FC = () => {
  return (
    <div className='App'>
      <ThemeContextProvider>
        <TopBar />
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
        </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn Reactaaaffsdfadazz
        </a>
        </header>
        <CssBaseline />
      </ThemeContextProvider>
    </div>
  );
};

export default App;
