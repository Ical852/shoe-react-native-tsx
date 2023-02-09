import {View} from 'react-native';
import React from 'react';

interface GapProps {
  width: number;
  height: number;
}
const Gap = (props: GapProps) => {
  const {width, height} = props;
  return <View style={{width, height}} />;
};

export default Gap;
