import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  text: {
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 6,
    width: 110,
    textAlign: 'center',
    marginBottom: 12,
    marginLeft: 6,
    marginRight: 6,
  },
  loader: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: 12,
  },
});
