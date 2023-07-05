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
import FilteredItem from './FilteredItem';
import styles from './styles';

const ComplexScreen = ({navigation}) => {
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
        title={'Клиники'}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.item}>
          {products.map((item, i) => {
            return (
              <FilteredItem
                basket
                key={i}
                navigation={navigation}
                RecName={item.RecName}
                item={item}
                onAddPress={() => console.log('ccc')}
                onRemoveFromBasket={() => console.log('ccc')}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ComplexScreen;
