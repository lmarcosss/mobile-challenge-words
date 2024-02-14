import {StyleSheet} from 'react-native';
import {colors} from '@constants';

export default StyleSheet.create({
  container: {padding: 16},
  containerLoader: {paddingTop: 70},
  wordContent: {
    backgroundColor: colors.SECONDARY,
    borderRadius: 5,
    alignItems: 'center',
    padding: 24,
  },
  errorContent: {
    margin: 16,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  text: {
    fontWeight: '600',
    fontSize: 20,
    color: colors.SECONDARY_FONT,
    paddingVertical: 12,
  },
  wordText: {
    fontWeight: '600',
    fontSize: 20,
    color: colors.SECONDARY_FONT,
  },
  headerTitle: {
    color: colors.PRIMARY_FONT,
  },
  errorTitle: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 5,
    color: colors.PRIMARY_FONT,
  },
  errorText: {
    textAlign: 'center',
    color: colors.PRIMARY_FONT,
    fontWeight: '500',
  },
  errorIcon: {marginLeft: 32},
});
