import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import awsExports from "./aws-exports";
import "./index.css";
import { createRoot } from 'react-dom/client';
import {Amplify} from 'aws-amplify';

Amplify.configure(awsExports);

const container = document.getElementById('root')
 const root = createRoot(container);
root.render(<App />);

reportWebVitals();
