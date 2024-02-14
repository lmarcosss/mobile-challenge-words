import {colors} from '@constants';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  backgroundStyle: {
    backgroundColor: colors.PRIMARY,
  },
  headerStyle: {
    backgroundColor: colors.PRIMARY,
    alignItems: 'center',
  },
  tabBarIndicatorStyle: {
    backgroundColor: colors.SECONDARY,
  },
  tabBarLabelStyle: {
    color: colors.PRIMARY_FONT,
    fontWeight: '500',
  },
});
