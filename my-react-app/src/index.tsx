import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/spiner.css';
import { Provider } from 'react-redux';
import { store } from './store/index';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
