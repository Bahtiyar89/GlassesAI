import React, {Fragment} from 'react';
import {View, TextInput, Text} from 'react-native';
import Colors from '../../utils/constants/Сolors';

import styles from './styles';

export default function CustomInput({
  placeholder = '',
  required,
  labelText,
  value,
  onChange,
}) {
  return (
    <Fragment>
      <View style={styles.inputLabel}>
        <Text style={{flex: 1, color: Colors.black}}>
          {labelText} <Text style={{color: 'red'}}>{required}</Text>
        </Text>
      </View>
      <TextInput
        placeholderTextColor={'#CED4D9'}
        placeholder={placeholder}
        mode="outlined"
        style={styles.input}
        onChangeText={val => onChange(val)}
        value={value}
      />
    </Fragment>
  );
}
