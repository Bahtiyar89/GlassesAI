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
    alignContent: 'center',
  },
  logInSignUpButton: {
    color: Colors.blue,
    fontSize: 12,
    textDecorationLine: 'underline',
    lineHeight: 16,
  },
  titleContainer: {
    marginTop: 25,
    marginBottom: 30,
  },
  title: {
    fontSize: 25,
    lineHeight: 30,
    alignSelf: 'center',
    color: Colors.black,
  },
  blueColor: {
    color: Colors.blue,
  },
  message: {
    marginBottom: 30,
    fontSize: 12,
    lineHeight: 16,
    alignSelf: 'center',
    color: Colors.black,
  },
  forgotPasswordButton: {
    marginTop: 8,
    marginLeft: 12,
    marginBottom: 16,
  },
  forgotPasswordButtonText: {
    fontSize: 12,
    textDecorationLine: 'underline',
    color: Colors.black,
  },
  inputContainer: {
    height: 80,
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  haveAnAccountText: {
    fontSize: 12,
    lineHeight: 16,
    color: Colors.black,
  },
  legend: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.black,
  },
  error: {
    fontSize: 14,
    lineHeight: 16,
    color: Colors.red,
  },
  passtitle: {flex: 1, color: Colors.black},
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

  inputError: {
    fontSize: 16,
    height: 48,
    borderRadius: 8,
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    color: Colors.black,
    backgroundColor: Colors.red,
  },

  inputEmail: {
    fontSize: 16,
    height: 48,
    borderRadius: 8,
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 6,
    color: Colors.white,
    backgroundColor: Colors.black,
  },

  searchSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    borderWidth: 0,
    borderRadius: 10,
    paddingLeft: 5,
    backgroundColor: Colors.black,
  },

  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  togglePassWrapper: {
    position: 'absolute',
    right: 12,
  },
  togglePassText: {
    color: Colors.black,
    textDecorationLine: 'underline',
    fontSize: 16,
  },
  completeButton: {
    width: '100%',
    marginTop: 10,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.blue,
    borderRadius: 8,
  },
  completeInactive: {
    backgroundColor: Colors.disabled,
  },
  completeButtonText: {
    color: Colors.white,
  },
  separate: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 28,
  },
  separateLine: {
    flex: 1,
    borderStyle: 'dashed',
    borderWidth: 0.7,
    borderColor: Colors.white,
  },
  separateText: {
    flex: 0.2,
    textAlign: 'center',
    color: Colors.darkGrey,
  },

  socialMediaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    width: '48%',
  },
  socialMediaButtonText: {
    fontSize: 16,
    color: Colors.black,
  },
  google: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: Colors.white,
  },
  googleIcon: {
    marginRight: 10,
  },
  ımageStyle: {
    width: 80,
    height: 100,
  },
  topHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
