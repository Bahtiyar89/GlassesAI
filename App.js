import React from 'react';
import {ToastProvider} from 'react-native-toast-notifications';

import Entrypoint from './src/screens/Entrypoint';
import AuthState from './src/context/auth/AuthState';

const App = () => {
  return (
    <ToastProvider normalColor="#7D4BFF" placement="top" offsetTop={60}>
      <AuthState>
        <Entrypoint />
      </AuthState>
    </ToastProvider>
  );
};

export default App;
