import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    backgroundColor: '#F2F3F7',
    borderBottomWidth: 1,
    borderBottomColor: '#D8DEE8',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
  screen: {
    flex: 1,
    paddingHorizontal: 0,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start', // if you want to fill rows left to right
  },
  images: {
    backgroundColor: '#E9EAEE',
    margin: 5,
    borderRadius: 12,
    width: '47%',
  },
  rowWrapper: {
    margin: 10,
    borderRadius: 6,
    paddingTop: 10,
    backgroundColor: '#fff',
  },
  fLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  srow: {marginLeft: 10, marginRight: 10, marginBottom: 10},
  theader: {
    color: '#000',
    fontSize: 10,
    marginBottom: 5,
  },
  ttext: {color: '#989898', fontSize: 10, marginBottom: 5},
  lastRow: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  incDecButton: {
    flexDirection: 'row',
    backgroundColor: '#EE5857',
    borderRadius: 12,
    paddingLeft: 5,
    paddingRight: 5,
  },
  swtText: {
    color: '#EF36C6',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  swtText2: {
    color: '#000000',
    fontSize: 12,
    fontWeight: '500',
    alignSelf: 'center',
  },
  ItemImageStyle: {
    height: 100,
    width: 140,
  },

  zeroNumberStyle: {
    width: 20,
    textAlign: 'center',
    alignSelf: 'center',
    color: '#FFFFFF',
    fontSize: 10,
  },
  plusStyle: {
    fontWeight: '500',
    color: '#FFFFFF',
  },
});

export default styles;
