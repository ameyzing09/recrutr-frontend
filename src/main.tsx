import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux/es/exports';
import './index.css';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
