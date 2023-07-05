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

const ProfilesScreen = ({navigation}) => {
  const authContext = useContext(AuthContext);
  const {signOut} = authContext;
  const [loginCrediantials, setLoginCrediantials] = useState({
    phone_number: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const submitLogin = () => {
    signOut();
  };

  return (
    <SafeAreaView style={styles.screen}>
      <CustomHeader
        titleStyle={{textAlign: 'center', width: '100%'}}
        title={'Профиль'}
      />
      <TouchableOpacity
        onPress={submitLogin}
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
        <Text style={{color: 'white', fontSize: 16}}>Выйти</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProfilesScreen;
