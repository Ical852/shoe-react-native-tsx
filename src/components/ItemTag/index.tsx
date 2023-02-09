import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {customColors, customFonts} from '../../utils';

interface ItemTagProps {
  title: String;
}
const ItemTag = (props: ItemTagProps) => {
  const {title} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default ItemTag;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    backgroundColor: customColors.orange,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 10,
    fontFamily: customFonts.regular,
    color: customColors.white,
  },
});
