import React, { FC } from 'react';
import { Text } from 'react-native-paper';
import { StyleSheet, TouchableOpacity } from 'react-native';
// themes
import { commonStyles } from 'theme/commonStyle';
// interfaces
import { CategoryType } from 'interfaces/index';

type CategoryItemProps = {
  item: CategoryType;
  onSelect: (category: CategoryType) => void;
  selectedCategories: string[];
};

const CategoryItem: FC<CategoryItemProps> = ({ item, onSelect, selectedCategories }) => {
  const isSelected = selectedCategories.includes(item.value);
  const handleSelect = () => {
    onSelect(item);
  };

  return (
    <TouchableOpacity
      style={[
        commonStyles.m1,
        isSelected ? commonStyles.bgPrimary : commonStyles.bgHighlight,
        styles.categoryItem,
      ]}
      onPress={handleSelect}>
      <Text
        style={[
          commonStyles.textCenter,
          isSelected ? commonStyles.textWhite : commonStyles.textPrimary,
          commonStyles.textBold,
        ]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoryItem: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
  },
});

export default CategoryItem;
