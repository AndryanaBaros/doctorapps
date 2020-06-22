import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyNews} from '../../../assets';
import {fonts, colors} from '../../../utils';
import {color} from 'react-native-reanimated';

const NewsItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}> 
        <Text style={styles.title}>
          Is it safe to stay at home during coronavirus?
        </Text>
        <Text style={styles.date}>Today</Text>
      </View>
      <Image source={DummyNews} style={styles.image} />
    </View>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 12,
    paddingTop: 16,
  },
  title: {
    fontSize: 17,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    maxWidth: 220,
  },
  date: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 5,
  },
  image: {width: 90, height: 70, borderRadius: 11},
  titleWrapper: {flex: 1},
});
