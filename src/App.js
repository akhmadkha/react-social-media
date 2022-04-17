import React from 'react';
import './App.css';
import AppRoutes from './routes';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

// optional configuration
const alertOptions = {
  position: positions.BOTTOM_RIGHT,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE
}

function App() {
  return (
    <AlertProvider template={AlertTemplate} {...alertOptions}>
      <AppRoutes/>
    </AlertProvider>
  );
}

export default App;
