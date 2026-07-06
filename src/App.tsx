import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { store } from './store';
import { AppRouter } from './router';
import './index.css';

function App() {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <AppRouter />
      </HelmetProvider>
    </Provider>
  );
}

export default App;
