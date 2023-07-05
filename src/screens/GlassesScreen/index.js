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
import {Camera} from 'react-native-deepar';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomHeader from '../../components/CustomHeader';
import CustomInput from '../../components/CustomInput';
import products from './products.json';
import AuthContext from '../../context/auth/AuthContext';
import FilteredItem from './FilteredItem';
import styles from './styles'; 

const GlassesScreen = ({navigation}) => {
  const authContext = useContext(AuthContext);

  const nav = async () => {
    const cameraPermission = await Camera.getCameraPermissionStatus();
    const microphonePermission = await Camera.getMicrophonePermissionStatus();
    console.log('cameraPermission: ', cameraPermission);
    console.log('microphonePermission: ', microphonePermission);
    if (true) {
      navigation.navigate('DeepArrScreen');
    }
  };
  
  return (
    <SafeAreaView style={styles.screen}>
      <CustomHeader
        titleStyle={{textAlign: 'center', width: '100%'}}
        title={'Оправы'}
      />
      <TouchableOpacity
        onPress={nav}
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

export default GlassesScreen;
