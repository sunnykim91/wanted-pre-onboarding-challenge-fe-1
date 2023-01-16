import React from 'react';
import './App.css';
import RootRouter from './Router/RootRouter';
import { Provider } from 'react-redux';
import RootStore from './store/RootStore';

function App() {
  return (
    <Provider store={RootStore}>
      <RootRouter />
    </Provider>
  );
}

export default App;
