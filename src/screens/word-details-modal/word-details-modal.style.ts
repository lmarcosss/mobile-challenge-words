import {StyleSheet} from 'react-native';
import {colors} from '@constants';

export default StyleSheet.create({
  container: {padding: 16},
  containerLoader: {paddingTop: 50},
  wordContent: {
    backgroundColor: colors.SECONDARY,
    borderRadius: 5,
    alignItems: 'center',
    padding: 24,
  },
  text: {
    fontWeight: '600',
    fontSize: 20,
    color: colors.SECONDARY_FONT,
  },
  wordText: {
    paddingBottom: 12,
  },
  headerTitle: {
    color: colors.PRIMARY_FONT,
  },
  errorTitle: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 5,
  },
  errorText: {textAlign: 'center'},
});
