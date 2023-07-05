import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import LoginScreens from '../navigation/LoginScreens';
import AuthContext from '../context/auth/AuthContext';
import MainScreens from '../navigation/MainScreens';

const Entrypoint = () => {
  const authContext = useContext(AuthContext);
  const {isSigned} = authContext;
  console.log('isSigned: ', isSigned);
  return (
    <NavigationContainer>
      {isSigned ? <MainScreens /> : <LoginScreens />}
    </NavigationContainer>
  );
};

export default Entrypoint;
