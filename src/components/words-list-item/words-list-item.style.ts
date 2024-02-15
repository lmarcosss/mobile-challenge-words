import {StyleSheet, Dimensions} from 'react-native';
import {ColorsEnum} from '@constants';

const {width} = Dimensions.get('screen');

const margin = width * 0.04;
export const textWidth = (width - 4 * margin) / 3;

export default StyleSheet.create({
  containerText: {
    backgroundColor: ColorsEnum.SECONDARY,
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 6,
    width: textWidth,
    marginBottom: 12,
    marginLeft: 6,
    marginRight: 6,
  },
  text: {
    textAlign: 'center',
    fontWeight: '500',
    color: ColorsEnum.SECONDARY_FONT,
  },
});
