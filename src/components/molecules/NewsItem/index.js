import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const NewsItem = ({title, date, image}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}> 
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Image source={{uri: image}} style={styles.image} />
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
