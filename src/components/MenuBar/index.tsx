import {StyleSheet, View} from 'react-native';
import React from 'react';
import {MenuItemModel} from '../../Models';
import MenuItem from '../MenuItem';

interface MenuBarProps {
  icons: Array<MenuItemModel>;
}

const MenuBar = (props: MenuBarProps) => {
  return (
    <View style={styles.menuBar}>
      {props.icons.map((menu: MenuItemModel) => {
        return (
          <MenuItem
            key={menu.id}
            title={menu.title}
            icon={menu.icon}
            active={menu.active}
          />
        );
      })}
    </View>
  );
};

export default MenuBar;

const styles = StyleSheet.create({
  menuBar: {
    backgroundColor: 'white',
    width: '100%',
    height: 81,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 10,
  },
});
