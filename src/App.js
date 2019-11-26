import React from 'react';
import { Provider } from 'react-redux';
import store from './Store';
import './App.css';
import homeConnect from './HomeConnect';

function App() { return (<Provider store={store}> {console.log('started')} 

{helloWorld()}

</Provider>); }

export default App;

function helloWorld(){
    {homeConnect.get('posts').then(response => {
        console.log(response.data);
        //dispatch(_getTopics(response.data));
    }).catch(function(error) {
        //console.log(error.response.data);
     })}
}
