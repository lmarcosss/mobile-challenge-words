import {ColorsEnum} from '@constants';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  backgroundStyle: {
    backgroundColor: ColorsEnum.PRIMARY,
  },
  headerStyle: {
    backgroundColor: ColorsEnum.PRIMARY,
    alignItems: 'center',
  },
  tabBarIndicatorStyle: {
    backgroundColor: ColorsEnum.SECONDARY,
  },
  tabBarLabelStyle: {
    color: ColorsEnum.PRIMARY_FONT,
    fontWeight: '500',
  },
});
