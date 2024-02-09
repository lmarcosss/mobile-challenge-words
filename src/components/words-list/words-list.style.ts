import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

const margin = width * 0.035;
const textWidth = (width - 4 * margin) / 3;

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 6,
    width: textWidth,
    textAlign: 'center',
    marginBottom: 12,
    marginLeft: 6,
    marginRight: 6,
    borderRadius: 5,
  },
  loader: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: 12,
  },
});
