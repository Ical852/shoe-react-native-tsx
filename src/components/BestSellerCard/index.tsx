import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {customColors, customFonts, numformat} from '../../utils';
import ItemTag from '../ItemTag';
import Gap from '../Gap';
import {ProductModel} from '../../Models';

interface BestSellerCardProps {
  product: ProductModel;
}
const BestSellerCard = (props: BestSellerCardProps) => {
  const {product} = props;
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: product.product_image[0].image,
        }}
      />
      <Gap width={0} height={12} />
      <ItemTag title={product.category.name} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>{numformat(product.price)}</Text>
    </View>
  );
};

export default BestSellerCard;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 48,
    height: 205,
    marginRight: 24,
    borderRadius: 8,
    backgroundColor: customColors.white,
    marginTop: 16,
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 8,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
  },
  img: {
    width: Dimensions.get('window').width - 48 - 16,
    height: 92,
    borderRadius: 4,
  },
  title: {
    fontSize: 18,
    fontFamily: customFonts.semiBold,
    color: customColors.black,
    marginTop: 6,
  },
  price: {
    fontSize: 14,
    fontFamily: customFonts.semiBold,
    color: customColors.orange,
    marginTop: 6,
  },
});
