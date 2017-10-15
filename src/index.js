import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './components/Store'

// ReactDOM.render(<App />, document.getElementById('root'));

const render = () => ReactDOM.render(<App />, document.getElementById('root'));
//trigger render on react init
render();
//TODO: instead of using this hammer consider using connect() of redux
store.subscribe(render);