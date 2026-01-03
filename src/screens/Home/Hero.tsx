import React, { FC, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Text, Searchbar } from 'react-native-paper';
// themes
import { commonStyles } from 'theme/commonStyle';

const Hero: FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <View style={[commonStyles.bgPrimary, commonStyles.p2]}>
      <Text variant="titleLarge" style={[commonStyles.textSecondary]}>
        Little Lemon
      </Text>
      <View style={[commonStyles.flexRow]}>
        <View style={commonStyles.flex1}>
          <Text variant="titleLarge" style={[commonStyles.textWhite, commonStyles.mt1]}>
            Chicago
          </Text>
          <Text variant="bodyMedium" style={[commonStyles.textWhite, commonStyles.mt1]}>
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a
            modern twist.
          </Text>
        </View>

        <View style={(commonStyles.flex1, styles.imageContainer)}>
          <Image style={styles.image} source={require('assets/img/Hero_image.png')} />
        </View>
      </View>

      <View style={commonStyles.mt2}>
        <Searchbar placeholder="Search" onChangeText={setSearchQuery} value={searchQuery} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 140,
    height: 150,
  },
  image: {
    overflow: 'hidden',
    borderRadius: 10,
    width: '100%',
    height: '100%',
  },
});

export default Hero;
