import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

import BackButton from '../../assets/svgs/backButton';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

export default function CustomHeader({
  hideHeaderLeft = false,
  headerRight,
  headerLeft,
  title,
  headerRightPress,
  headerLeftPress,
  scrollToTheTop = () => {},
  titleStyle,
  style,
}) {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={[styles.header, style]}>
      {!true && (
        <View style={styles.headerLeftRightContainer}>
          {headerLeft?.() || <BackButton onPress={headerLeftPress || goBack} />}
        </View>
      )}
      <Text
        onPress={scrollToTheTop}
        numberOfLines={1}
        style={[styles.headerTitle, titleStyle]}>
        {title}
      </Text>
      <View style={styles.headerLeftRightContainer}>
        {headerRight?.() || <View />}
      </View>
    </View>
  );
}

CustomHeader.propTypes = {
  hideHeaderLeft: PropTypes.any,
  headerRight: PropTypes.any,
  headerLeft: PropTypes.any,
  title: PropTypes.any,
  headerRightPress: PropTypes.any,
  headerLeftPress: PropTypes.any,
  scrollToTheTop: PropTypes.any,
  titleStyle: PropTypes.any,
  style: PropTypes.any,
};
