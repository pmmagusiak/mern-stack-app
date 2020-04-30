import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLocationArrow, faEnvelope, faPhoneSquare } from '@fortawesome/free-solid-svg-icons'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

library.add(faLocationArrow, faEnvelope, faPhoneSquare)
