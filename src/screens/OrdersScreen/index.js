import React, {Fragment, useContext, useState} from 'react';
import {
  View,
  Pressable,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomHeader from '../../components/CustomHeader';
import CustomInput from '../../components/CustomInput';
import products from './products.json';
import AuthContext from '../../context/auth/AuthContext';
import styles from './styles';

const OrdersScreen = ({navigation}) => {
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
    <SafeAreaView style={styles.screen}>
      <CustomHeader
        titleStyle={{textAlign: 'center', width: '100%'}}
        title={'Заказы'}
      />
      <TouchableOpacity
        style={{
          marginTop: 20,
          width: '90%',
          backgroundColor: 'green',
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          borderRadius: 10,
        }}>
        <Text style={{color: 'white', fontSize: 16}}>Выбран</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 20,
          width: '90%',
          backgroundColor: 'green',
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          borderRadius: 10,
        }}>
        <Text style={{color: 'white', fontSize: 16}}>Заказан</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 20,
          width: '90%',
          backgroundColor: 'green',
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          borderRadius: 10,
        }}>
        <Text style={{color: 'white', fontSize: 16}}>Оплачен</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 20,
          width: '90%',
          backgroundColor: 'green',
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          borderRadius: 10,
        }}>
        <Text style={{color: 'white', fontSize: 16}}>Присмерить Оправу</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 20,
          width: '90%',
          backgroundColor: 'green',
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          borderRadius: 10,
        }}>
        <Text style={{color: 'white', fontSize: 16}}>Получен</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OrdersScreen;
