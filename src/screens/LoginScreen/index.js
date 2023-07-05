import React, {Fragment, useContext, useState} from 'react';
import {
  View,
  Pressable,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomInput from '../../components/CustomInput';

import AuthContext from '../../context/auth/AuthContext';
import styles from './styles';

const LoginScreen = ({navigation}) => {
  const authContext = useContext(AuthContext);
  const {signin} = authContext;
  const [loginCrediantials, setLoginCrediantials] = useState({
    phone_number: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const submitLogin = () => {
    signin();
  };

  return (
    <Fragment>
      <KeyboardAwareScrollView>
        <SafeAreaView style={styles.screen}>
          <View style={styles.topHeader}>
            <Image
              style={{width: 80, height: 100}}
              source={require('../../assets/jpgs/komp.jpeg')}
            />
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.haveAnAccountText}>
                Вы не зарегистрированы
              </Text>
              <Pressable onPress={() => navigation.navigate('SignUpScreen')}>
                <Text style={styles.logInSignUpButton}>
                  Заригистрироваться{' '}
                </Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.titleContainer}>
            <Text style={[styles.title]}>
              <Text style={styles.blueColor}>Вход</Text>
            </Text>
          </View>

          <CustomInput
            required={''}
            labelText={'Имя'}
            value={loginCrediantials.phone_number}
            onChange={val =>
              setLoginCrediantials({...loginCrediantials, phone_number: val})
            }
          />

          <Text style={styles.passtitle}>Пароль</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={[styles.input]}
              onChangeText={val =>
                setLoginCrediantials({...loginCrediantials, password: val})
              }
              value={loginCrediantials.password}
              secureTextEntry={showPassword}
              placeholderTextColor={'#999CA0'}
              placeholder={'.........'}
            />
            <Pressable
              onPress={() => setShowPassword(!showPassword)}
              style={styles.togglePassWrapper}>
              <Text style={styles.togglePassText}>
                {showPassword ? 'показать' : 'спрятать'}
              </Text>
            </Pressable>
          </View>

          <TouchableOpacity
            onPress={submitLogin}
            style={[styles.completeButton]}>
            <Text style={[styles.completeButtonText]}>Войти</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </Fragment>
  );
};

export default LoginScreen;
