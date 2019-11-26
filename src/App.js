import React from 'react';
import { Provider } from 'react-redux';
import store from './Store';
import './App.css';

function App() { return (<Provider store={store}> {console.log('started')} </Provider>); }

export default App;
