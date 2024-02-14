import {StyleSheet} from 'react-native';
import {ColorsEnum} from '@constants';

export default StyleSheet.create({
  container: {padding: 16, paddingBottom: 36},
  containerLoader: {paddingTop: 70},
  wordContent: {
    backgroundColor: ColorsEnum.SECONDARY,
    borderRadius: 5,
    alignItems: 'center',
    padding: 24,
  },
  errorContent: {
    margin: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ColorsEnum.ERROR,
  },
  text: {
    fontWeight: '600',
    fontSize: 20,
    color: ColorsEnum.SECONDARY_FONT,
    paddingVertical: 12,
  },
  wordText: {
    fontWeight: '600',
    fontSize: 20,
    color: ColorsEnum.SECONDARY_FONT,
  },
  headerTitle: {
    color: ColorsEnum.PRIMARY_FONT,
  },
  errorTitle: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 5,
    color: ColorsEnum.PRIMARY_FONT,
  },
  errorText: {
    textAlign: 'center',
    color: ColorsEnum.PRIMARY_FONT,
    fontWeight: '500',
  },
  errorIcon: {marginLeft: 32},
});
