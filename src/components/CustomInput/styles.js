import {StyleSheet} from 'react-native';
import Colors from '../../utils/constants/Сolors';

const styles = StyleSheet.create({
  inputLabel: {
    color: Colors.black,
    marginTop: 5,
    flexDirection: 'row',
    width: '90%',
  },
  input: {
    fontSize: 16,
    height: 48,
    borderRadius: 8,
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderColor: '#CED4D9',
    borderWidth: 2,
    color: Colors.black,
  },
});

export default styles;
