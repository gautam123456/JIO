import 'styles/image.scss';
// TODO
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/Main';
import ItemDetails from './components/ItemDetails';


render(
  <Router history = { browserHistory }>
    <Route path = { '/' } component = { App } />
    <Route path= {'/article'} component = {ItemDetails} />
  </Router>
, document.getElementById('app'));

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', {scope: '/'})
    .then(function(reg) {
      console.log('Registration succeeded. Scope is ' + reg.scope);
    }).catch(function(error) {
      console.log('Registration failed with ' + error);
    });
}



