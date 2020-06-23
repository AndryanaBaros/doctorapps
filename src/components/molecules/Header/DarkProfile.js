import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms';
import {DummyDoctor4} from '../../../assets';

const DarkProfile = ({onPress}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-light" onPress={onPress}/>
      <View style={styles.content}>
        <Text style={styles.name}> Nadhira Balqis</Text>
        <Text style={styles.desc}>Dokter Anak</Text>
      </View>     
      <Image source={DummyDoctor4} style={styles.avatar}/>
    </View>
  );
};

export default DarkProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingVertical: 30,
    paddingLeft: 20,
    paddingRight: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
  },
  content: {flex: 1},
  avatar: { width: 46, height: 46, borderRadius: 46/2,},
  name: {fontSize: 20, fontFamily: fonts.primary[600], color: colors.white, textAlign: 'center'},
  desc: {fontSize: 14, fontFamily: fonts.primary.normal, marginTop: 6, textAlign:'center',color: colors.text.subTitle},
  
});
