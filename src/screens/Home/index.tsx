import React, { FC, useEffect, useState, useCallback } from 'react';
import { Avatar, Text } from 'react-native-paper';
import { TouchableOpacity, View, FlatList } from 'react-native';
// components
import Hero from './Hero';
import LogoIcon from 'components/Logo';
import ProductItem from 'components/ProductItem';
import CategoryItem from 'components/CategoryItem';
// themes
import { commonStyles } from 'theme/commonStyle';
// interfaces
import { CategoryType, ProductType } from 'interfaces/index';
import { ROUTES } from 'constants/index';
import { useDebounce, useNavigate } from 'hooks/index';
import { fetchProducts } from './fetchProducts';

export const CATEGORIES: Array<CategoryType> = [
  {
    id: '1',
    name: 'Starters',
    value: 'starters',
  },
  {
    id: '2',
    name: 'Mains',
    value: 'mains',
  },
  {
    id: '3',
    name: 'Desserts',
    value: 'desserts',
  },
  {
    id: '4',
    name: 'Sides',
    value: 'sides',
  },
];

const HomeScreen: FC = () => {
  const navigation = useNavigate();
  const [products, setProducts] = useState<ProductType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const debouncedSearch = useDebounce(searchQuery, 500);

  const getProducts = useCallback(async () => {
    try {
      const fetchedProducts = await fetchProducts(selectedCategory, debouncedSearch);
      setProducts(fetchedProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }, [selectedCategory, debouncedSearch]);

  const handleCategorySelect = (category: CategoryType) => {
    if (selectedCategory.includes(category.value)) {
      setSelectedCategory((prev) => prev.filter((c) => c !== category.value));
    } else {
      setSelectedCategory((prev) => [...prev, category.value]);
    }
  };

  useEffect(() => {
    getProducts();
  }, [getProducts, selectedCategory, debouncedSearch]);

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
      <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <View style={[commonStyles.p2]}>
        <Text variant="titleLarge">Order for Delivery!</Text>
        <FlatList
          data={CATEGORIES}
          renderItem={({ item }) => (
            <CategoryItem item={item} onSelect={handleCategorySelect} selectedCategories={selectedCategory} />
          )}
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
