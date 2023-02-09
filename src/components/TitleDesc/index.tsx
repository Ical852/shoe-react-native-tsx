import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {customColors, customFonts} from '../../utils';

interface TitleDescProps {
  title: String;
  desc: String;
}
const TitleDesc = (props: TitleDescProps) => {
  const {title, desc} = props;
  return (
    <View style={styles.bsdescbox}>
      <Text style={styles.bstitle}>{title}</Text>
      <Text style={styles.bsdesc}>{desc}</Text>
    </View>
  );
};

export default TitleDesc;

const styles = StyleSheet.create({
  bsdescbox: {
    marginHorizontal: 24,
  },
  bstitle: {
    fontSize: 14,
    fontFamily: customFonts.semiBold,
    color: customColors.black,
  },
  bsdesc: {
    fontSize: 14,
    fontFamily: customFonts.regular,
    color: customColors.grey,
    marginTop: 2,
  },
});
