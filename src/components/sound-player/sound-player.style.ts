import {ColorsEnum} from '@constants';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 12,
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {marginRight: 10},
  unavailableContainer: {
    marginTop: 12,
    padding: 8,
    backgroundColor: ColorsEnum.ERROR,
    borderRadius: 4,
  },
  unavailableText: {
    color: ColorsEnum.PRIMARY_FONT,
    fontStyle: 'italic',
    fontSize: 13,
    textAlign: 'center',
    fontWeight: '600',
  },
});
