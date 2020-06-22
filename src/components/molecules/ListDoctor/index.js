import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IconChevron} from '../../../assets';
import {colors, fonts} from '../../../utils';

const ListDoctor = ({profile, name, desc, type, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={profile} style={styles.avatar} />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.chat}>{desc}</Text>
      </View>
      {type === 'next' && <IconChevron />}
    </TouchableOpacity>
  );
};

export default ListDoctor;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {flex: 1,},
  avatar: {width: 48, height: 48, borderRadius: 48 / 2, marginRight: 12},
  name: {
    fontSize: 18,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  chat: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
  },
});
