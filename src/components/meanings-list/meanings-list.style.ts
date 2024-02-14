import {ColorsEnum} from '@constants';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 20,
    backgroundColor: ColorsEnum.TERTIARY,
    padding: 16,
    borderRadius: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: ColorsEnum.PRIMARY_FONT,
  },
  content: {
    paddingTop: 6,
  },
  partOfSpeech: {
    color: ColorsEnum.PRIMARY_FONT,
    textTransform: 'capitalize',
    fontWeight: '600',
    marginTop: 6,
  },
  definitions: {
    fontWeight: '400',
  },
});
