import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';

import App from './App';
import Loading from './components/Loading';

import { store } from './store'
import CustomToast from './components/CustomToast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Loading />}>
        <CustomToast />
        <App />
      </Suspense>
    </Provider>
  // </React.StrictMode>
);
