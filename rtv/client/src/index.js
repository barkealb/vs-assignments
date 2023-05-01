import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { IssuesProvider } from './context/IssuesProvider';
import { UserProvider } from './context/UserProvider';
import { BrowserRouter } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <IssuesProvider>
        <UserProvider>
              <App />
        </UserProvider>
      </IssuesProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
