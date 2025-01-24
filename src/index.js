import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Amplify関連
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports'; // 自動生成されるファイル

Amplify.configure(awsconfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
