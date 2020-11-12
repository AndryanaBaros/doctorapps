import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ILHospitals1} from '../../../assets';
import {fonts, colors} from '../../../utils';

const ListHospital = ({title, address, image }) => {
  return (
    <View style={styles.page}>
      <Image source={{uri: image}} style={styles.image} />
      <View />
      <View>
  <Text style={styles.title}>{title}</Text>
  <Text style={styles.address}>{address}</Text>
      </View>
    </View>
  );
};

export default ListHospital;

const styles = StyleSheet.create({
  page: {
    paddingTop: 30,
    paddingLeft: 12,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 20,
  },
  image: {width: 80, height: 60, marginRight: 16},
  title: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
    maxWidth: 151,
  },
  address: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
  },
});
