import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Tableapp from './Tableapp';

const listTable = [{id: '0', price: '300', name: 'Product one'}, 
{id: '1', price: '600', name: 'Product two'}, 
{id: '2', price: '1200', name: 'Product three'}, 
{id: '3', price: '2400', name: 'Product four'},
{id: '4', price: '4800', name: 'Product five'},
{id: '5', price: '1', name: 'Product six'}];

ReactDOM.render(
  <React.StrictMode>
    <Tableapp list={listTable}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
