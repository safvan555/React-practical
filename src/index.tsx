import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { storeList } from './storeMain/store-temp';
import HomeMain from './pages/HomeMain';
import './styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
<React.StrictMode>
   {/* provider makes the redux store available to all components */}
    <Provider store={storeList}>
      <HomeMain />
    </Provider>
  </React.StrictMode>
);