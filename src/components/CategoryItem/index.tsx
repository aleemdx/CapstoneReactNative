import { Text } from 'react-native-paper';
import React, { FC, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
// themes
import { commonStyles } from 'theme/commonStyle';
// interfaces
import { CategoryType } from 'interfaces/index';

const CategoryItem: FC<{ item: CategoryType }> = ({ item }) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <TouchableOpacity
      style={[
        commonStyles.m1,
        isSelected ? commonStyles.bgPrimary : commonStyles.bgHighlight,
        styles.categoryItem,
      ]}
      onPress={() => setIsSelected(!isSelected)}>
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
