import React from 'react';
import {Text, Pressable, View, Image, TouchableOpacity} from 'react-native';

import styles from './styles';

const FilteredItem = props => {
  const {navigation, onAddPress, onRemoveFromBasket} = props;
  console.log('RecPict: ', props.item.RecPict);
  const getImage = image => {
    console.log('image: ', image);
    switch (image) {
      case 'CAD':
        return require('../../assets/clinics/doktor-linz.jpg');
        break;
      case 'CAD1':
        return require('../../assets/clinics/smart-linz.jpg');
        break;
      case 'CAD2':
        return require('../../assets/clinics/th.jpeg');
        break;

      default:
        return require('../../assets/clinics/smart-linz.jpg');
        break;
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
