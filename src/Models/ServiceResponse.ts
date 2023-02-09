/* eslint-disable semi */
import {Key} from 'react';
import {ImageSourcePropType} from 'react-native';

interface Meta {
  message: String;
  code: number;
  status: String;
}

interface Category {
  id: Key;
  name: String;
}

interface ProductImage {
  id: Key;
  product_id: number;
  image: ImageSourcePropType;
}

interface Product {
  id: Key;
  name: String;
  category_id: number;
  desc: String;
  price: number;
  category: Category;
  product_image: Array<ProductImage>;
}

export default interface ServiceResponse {
  meta: Meta;
  data: Array<Product>;
}
