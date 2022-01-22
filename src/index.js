import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { ActionCableProvider } from 'react-actioncable-provider' ;

ReactDOM.render(

  <ActionCableProvider url={'ws://localhost:3000/cable'}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ActionCableProvider>,
  document.getElementById('root')
);

reportWebVitals();
// serviceWorker.unregister();
