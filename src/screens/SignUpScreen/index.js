import React, {useRef, useContext, Fragment, useState} from 'react';
import {
  View,
  Pressable,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import AuthContext from '../../context/auth/AuthContext';
import styles from './styles';
import CustomInput from '../../components/CustomInput';

export default function SignUpScreen({navigation}) {
  const authContext = useContext(AuthContext);
  const [newUser, setNewUser] = useState({
    phone_number: '',
    password: '',
    first_name: '',
    last_name: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const submit = async () => {
    await signUp();
  };

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const phoneInput = useRef();
  const [phone, setPhone] = useState('');
  console.log('phone:nn', phone);
  const hideDatePicker = () => {};

  const handleConfirm = date => {};
  return (
    <Fragment>
      <KeyboardAwareScrollView>
        <SafeAreaView style={styles.screen}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View style={styles.topLittleTitle}>
              <Image
                style={{width: 80, height: 100}}
                source={require('../../assets/jpgs/komp.jpeg')}
              />
              <View style={styles.container}>
                <Text style={styles.haveAnAccountText}>
                  У вас уже есть аккаунт
                </Text>
                <Pressable onPress={() => navigation.navigate('LoginScreen')}>
                  <Text style={styles.logInSignUpButton}>Вход</Text>
                </Pressable>
              </View>
            </View>

            <View style={styles.titleContainer}>
              <Text
                style={[styles.title, styles.blueColor, {marginBottom: 10}]}>
                Регистрация
              </Text>
            </View>

            <CustomInput
              required={''}
              labelText={'Имя'}
              value={newUser.first_name}
              onChange={val => setNewUser({...newUser, first_name: val})}
            />
            <CustomInput
              required={''}
              labelText={'Фамилия'}
              value={newUser.last_name}
              onChange={val => setNewUser({...newUser, last_name: val})}
            />

            <Text style={styles.passtitle}>Пароль</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={[styles.input]}
                onChangeText={val => setNewUser({...newUser, password: val})}
                value={newUser.password}
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

            <Pressable onPress={submit} style={[styles.completeButton]}>
              <Text style={styles.completeButtonText}>Регистрация</Text>
            </Pressable>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </Fragment>
  );
}
