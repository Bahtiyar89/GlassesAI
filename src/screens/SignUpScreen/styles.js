import {StyleSheet} from 'react-native';
import Colors from '../../utils/constants/Сolors';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 16,
    marginLeft: 20,
    marginRight: 20,
  },
  container: {
    alignSelf: 'center',
    alignItems: 'flex-end',
  },
  haveAnAccountText: {
    fontSize: 12,
    lineHeight: 16,
    color: Colors.black,
  },
  logInSignUpButton: {
    color: Colors.blue,
    fontSize: 12,
    textDecorationLine: 'underline',
    lineHeight: 16,
  },
  titleContainer: {
    marginTop: 10,
  },
  title: {
    fontSize: 28,
    lineHeight: 35,
    alignSelf: 'center',
    color: Colors.black,
  },
  blueColor: {
    color: Colors.blue,
  },
  completeButton: {
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.blue,
    borderRadius: 8,
  },
  completeButtonText: {
    color: Colors.white,
    fontWeight: 'bold',
  },
  topLittleTitle: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  passtitle: {flex: 1, color: Colors.black},
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 16,
    height: 48,
    borderRadius: 8,
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 8,
    color: Colors.black,
    borderColor: '#CED4D9',
    borderWidth: 2,
  },
  togglePassWrapper: {
    position: 'absolute',
    right: 12,
  },
});

export default styles;
