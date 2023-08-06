import React from 'react';
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss"
import App from './App';
import {Provider as StoreProvider} from "react-redux";
import { store } from './store/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <StoreProvider store={store} >
   <App/>
   </StoreProvider>
  </React.StrictMode>
);

