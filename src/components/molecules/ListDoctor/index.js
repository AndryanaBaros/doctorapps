import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  IconChevron,
  IconProfile,
  IconTranslate,
  IconStarProfile,
  IconHelp,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const ListDoctor = ({profile, name, desc, type, onPress, icon}) => {
  const Icon = () => {
    if (icon == 'edit-profile') {
      return <IconProfile />;
    }
    if (icon == 'language') {
      return <IconTranslate />;
    }
    if (icon == 'rate') {
      return <IconStarProfile />;
    }
    if (icon == 'help') {
      return <IconHelp />;
    }
    return <IconProfile />;
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon ? <Icon /> : <Image source={profile} style={styles.avatar} />}
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
  content: {flex: 1, marginLeft: 16,},
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
