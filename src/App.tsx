// React
import React, { useState } from 'react';
import { AuthStoreProvider } from './context/context';
// Router Packages
import { BrowserRouter, Route, Redirect, Router } from 'react-router-dom';
import { createBrowserHistory } from "history";

// Stylesheet
import './App.css';

// MUI Integration
import { ThemeProvider } from '@material-ui/styles'
import theme from './utils/theme';

// Components
import Navbar from "./components/Navbar/Navbar";
import LoginView from './views/Login/LoginView';
import HomeView from './views/Home/HomeView';

// Views


const history = createBrowserHistory();

const App: React.FC = () => {


  return (
    <AuthStoreProvider>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Navbar history={history}/>
          <main>
            <Route path='/' component={HomeView} />
            <Route path='/login' component={LoginView} />
          </main>
        </Router>
      </ThemeProvider>
    </AuthStoreProvider>
  );
}

export default App;