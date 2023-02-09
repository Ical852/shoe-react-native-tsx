import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {customColors, customFonts, numformat} from '../../utils';
import ItemTag from '../ItemTag';

interface SuperRareCardProps {
  img: ImageSourcePropType;
  cat: String;
  title: String;
  price: number;
}
const SuperRareCard = (props: SuperRareCardProps) => {
  const {img, cat, title, price} = props;
  return (
    <View style={styles.container}>
      <View style={styles.topcont}>
        <Image source={img} style={styles.img} />
        <View style={styles.itcont}>
          <ItemTag title={cat} />
        </View>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{numformat(price)}</Text>
    </View>
  );
};

export default SuperRareCard;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width / 2 - 24 - 7,
    height: 107,
    borderRadius: 8,
    backgroundColor: customColors.white,
    marginHorizontal: 7,
    padding: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
  },
  topcont: {
    flexDirection: 'row',
  },
  itcont: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: 32,
  },
  img: {
    height: 42,
    width: 42,
    borderRadius: 6,
  },
  title: {
    fontSize: 12,
    fontFamily: customFonts.medium,
    color: customColors.black,
    marginTop: 8,
  },
  price: {
    fontSize: 10,
    fontFamily: customFonts.semiBold,
    color: customColors.orange,
    marginTop: 4,
  },
});
