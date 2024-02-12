import {Dimensions, StyleSheet} from 'react-native';

const ScreenHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: ScreenHeight,
  },
});
