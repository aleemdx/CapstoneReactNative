import React, { FC, useEffect, useState } from 'react';
import { Avatar, Text } from 'react-native-paper';
import { TouchableOpacity, View, FlatList } from 'react-native';
// components
import Hero from './Hero';
import ProductItem from 'components/ProductItem';
import CategoryItem from 'components/CategoryItem';
import LogoIcon from 'components/Logo';
// themes
import { commonStyles } from 'theme/commonStyle';
// interfaces
import { CategoryType, ProductType } from 'interfaces/index';
import { ROUTES } from 'constants/index';
import { useNavigate } from 'hooks/index';
import { fetchProducts } from './fetchProducts';

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

const HomeScreen: FC = () => {
  const navigation = useNavigate();
  const [products, setProducts] = useState<ProductType[]>([]);

  const getProducts = async () => {
    try {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const renderHeader = () => (
    <>
      <View style={[commonStyles.p2]}>
        <View style={[commonStyles.flexRow, commonStyles.justifyBetween]}>
          <LogoIcon />

          <TouchableOpacity onPress={() => navigation.navigate(ROUTES.PROFILE)}>
            <Avatar.Image size={50} source={require('assets/img/Profile.png')} />
          </TouchableOpacity>
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
      data={products}
      renderItem={({ item }) => <ProductItem item={item} />}
      keyExtractor={(item) => item.name}
      ListHeaderComponent={renderHeader}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default HomeScreen;
