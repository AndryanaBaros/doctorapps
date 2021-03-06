import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyUser, IconRemovePhoto} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Profile = ({name, desc, remove, photo, onPress}) => {
  return (
    <View style={styles.container}>
      {!remove && (
        <View style={styles.borderProfile}>
          <Image source={photo} style={styles.avatar} />
        </View>
      )}
      {remove && (
        <TouchableOpacity style={styles.borderProfile} onPress={onPress}>
          <Image source={photo} style={styles.avatar} />
          {remove && <IconRemovePhoto style={styles.iconRemove} />}
        </TouchableOpacity>
      )}
      {name && (
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.profession}>{desc}</Text>
        </View>
      )}  
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center'},
  avatar: {width: 120, height: 120, borderRadius: 120 / 2},
  borderProfile: {
    width: 140,
    height: 140,
    borderRadius: 140 / 2,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 22,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 16,
  },
  profession: {
    fontSize: 18,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
    marginTop: 2,
    textAlign: 'center',
  },
  iconRemove: {position: 'absolute', right: 8, bottom: 8},
});
