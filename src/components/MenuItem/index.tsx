import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconExplore, IconHome, IconProfile, IconWish} from '../../assets';
import {customColors, customFonts} from '../../utils';

interface MenuItemProps {
  icon: String;
  title: String;
  active: Boolean;
}
const MenuItem = (props: MenuItemProps) => {
  const {icon, title, active} = props;

  const GetIcon = () => {
    if (icon === 'home') {
      return <IconHome />;
    } else if (icon === 'explore') {
      return <IconExplore />;
    } else if (icon === 'wish') {
      return <IconWish />;
    } else {
      return <IconProfile />;
    }
  };

  return (
    <View style={styles.container}>
      <GetIcon />
      <Text style={styles.title(active)}>{title}</Text>
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: (active: Boolean) => ({
    fontSize: 14,
    fontFamily: active ? customFonts.medium : customFonts.regular,
    color: active ? customColors.orange : customColors.orange3,
  }),
});
