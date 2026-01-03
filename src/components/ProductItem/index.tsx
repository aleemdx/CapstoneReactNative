import React, { FC } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
// interfaces
import { ProductItemProps } from 'interfaces/index';
import { commonStyles } from 'theme/commonStyle';

const ProductItem: FC<ProductItemProps> = ({ item }) => {
  const { name, price, description, image } = item;
  return (
    <View style={[commonStyles.m1, commonStyles.flexRow]}>
      <View style={[commonStyles.flex2]}>
        <Text variant="titleMedium">{name}</Text>
        <Text variant="bodyMedium">{description}</Text>
        <Text variant="titleMedium">${price}</Text>
      </View>
      <View style={[commonStyles.flex1, styles.imageContainer]}>
        <Image source={image} style={[styles.image]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 100,
    height: 100,
  },
  image: {
    overflow: 'hidden',
    borderRadius: 10,
    width: '100%',
    height: '100%',
  },
});

export default ProductItem;
