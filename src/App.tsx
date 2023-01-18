import React from 'react';
import './App.css';
import RootRouter from './Router/RootRouter';
import { Provider } from 'react-redux';
import RootStore from './store/RootStore';
import SnackBarProvider from './utils/SnackBar/SnackBarProvider';
import ModalProvider from './utils/modal/ModalProvider';

function App() {
  return (
    <Provider store={RootStore}>
      <ModalProvider>
        <SnackBarProvider>
          <RootRouter />
        </SnackBarProvider>
      </ModalProvider>
    </Provider>
  );
}

export default App;
