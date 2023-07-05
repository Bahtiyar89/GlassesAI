import React, {useState, useEffect} from 'react';
import {Text, Pressable, View, Image, TouchableOpacity} from 'react-native';

import styles from './styles';

const FilteredItem = props => {
  const {navigation, onAddPress, onRemoveFromBasket} = props;
  const getImage = image => {
    console.log('image: ', image);
    switch (image) {
      case 'CAD':
        return require('../../assets/glassses/ocki.jpg');

      case 'CAD1':
        return require('../../assets/glassses/ocki1.jpg');

      case 'CAD2':
        return require('../../assets/glassses/ocki2.jpeg');

      default:
        return require('../../assets/glassses/ocki.jpg');
    }
  };
  return (
    <View style={styles.images}>
      <View style={styles.rowWrapper}>
        <Pressable
          onPress={() =>
            navigation.navigate('ProductItemScreen', {id: props.item.RecID})
          }
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={styles.ItemImageStyle}
            source={getImage(props.item.RecPict)}
          />
        </Pressable>
      </View>
      <View style={styles.srow}>
        <Text style={styles.theader}>{props.item.name}</Text>
        <Text style={styles.swtText}>{props.RecName}</Text>
      </View>
    </View>
  );
};

export default FilteredItem;
