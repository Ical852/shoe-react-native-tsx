/* eslint-disable semi */
import {Key} from 'react';
import {ImageSourcePropType} from 'react-native';

interface Category {
  id: Key;
  name: String;
}

interface ProductImage {
  id: Key;
  product_id: number;
  image: ImageSourcePropType;
}

export default interface ProductModel {
  id: Key;
  name: String;
  category_id: number;
  desc: String;
  price: number;
  category: Category;
  product_image: Array<ProductImage>;
}
