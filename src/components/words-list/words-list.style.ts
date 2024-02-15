import {StyleSheet} from 'react-native';
import {ColorsEnum} from '@constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  loader: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: 12,
  },
  emptyText: {
    textAlign: 'center',
    color: ColorsEnum.PRIMARY_FONT,
  },
});
