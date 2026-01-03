import React, { FC } from 'react';
import { View } from 'react-native';
import { Avatar, Text } from 'react-native-paper';
import { FlatList } from 'react-native';
// components
import Hero from './Hero';
import ProductItem from 'components/ProductItem';
import CategoryItem from 'components/CategoryItem';
import LogoIcon from 'components/Logo';
// themes
import { commonStyles } from 'theme/commonStyle';
// interfaces
import { CategoryType, ProductType } from 'interfaces/index';

export const CATEGORIES: Array<CategoryType> = [
  {
    id: '1',
    name: 'Starters',
  },
  {
    id: '2',
    name: 'Mains',
  },
  {
    id: '3',
    name: 'Desserts',
  },
  {
    id: '4',
    name: 'Sides',
  },
];

export const PRODUCTS: Array<ProductType> = [
  {
    id: '1',
    name: 'Bruschetta',
    price: 100,
    image: require('assets/img/Bruschetta.png'),
    description: 'Bruschetta description',
  },
  {
    id: '2',
    name: 'Greek Salad',
    price: 200,
    image: require('assets/img/Greek_salad.png'),
    description: 'Greek Salad description',
  },
  {
    id: '3',
    name: 'Lemon Dessert',
    price: 300,
    image: require('assets/img/Lemon_dessert.png'),
    description: 'Lemon Dessert description',
  },
  {
    id: '4',
    name: 'Grilled Fish',
    price: 400,
    image: require('assets/img/Grilled_fish.png'),
    description: 'Grilled Fish description',
  },
  {
    id: '5',
    name: 'Pasta',
    price: 500,
    image: require('assets/img/Pasta.png'),
    description: 'Pasta description',
  },
];

const HomeScreen: FC = () => {
  const renderHeader = () => (
    <>
      <View style={[commonStyles.p2]}>
        <View style={[commonStyles.flexRow, commonStyles.justifyBetween]}>
          <LogoIcon />
          <Avatar.Image size={50} source={require('assets/img/Profile.png')} />
        </View>
      </View>
      <Hero />
      <View style={[commonStyles.p2]}>
        <Text variant="titleLarge">Order for Delivery!</Text>
        <FlatList
          data={CATEGORIES}
          renderItem={({ item }) => <CategoryItem item={item} />}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </>
  );

  return (
    <FlatList
      data={PRODUCTS}
      renderItem={({ item }) => <ProductItem item={item} />}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={renderHeader}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default HomeScreen;
