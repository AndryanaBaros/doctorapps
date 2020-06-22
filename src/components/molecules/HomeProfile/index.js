import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyUser} from '../../../assets';
import {fonts, colors} from '../../../utils';
import {color} from 'react-native-reanimated';

const HomeProfile = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyUser} style={styles.avatar} />
      <View>
        <Text style={styles.name}>Andryana Baros</Text>
        <Text style={styles.profession}> Skateboarder</Text>
      </View> 
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  avatar: {
    width: 46,
    height: 46,
    borderBottomEndRadius: 46 / 2,
    marginRight: 12,
  },
  name: {
    fontSize: 18,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  profession: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
});
