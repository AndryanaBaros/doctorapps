import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Header, Button, Link, Gap} from '../../components';
import {ILNullPhoto, IconRemovePhoto, IconAddPhoto} from '../../assets';
import {colors, fonts} from '../../utils';

const UploadPhoto = ({navigation}) => {
  return (
    <View style={styles.page} >
      <Header title="Upload Photo" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.avatarWrapper}>
            <Image source={ILNullPhoto} style={styles.avatar} />
            <IconAddPhoto style={styles.addPhoto} />
          </View>
          <Gap height={26}/>
          <View>
            <Text style={styles.name}>Andryana Baros</Text>
            <Text style={styles.profession}>Skateboarder</Text>
          </View>
        </View>
        <View>
          <Button title="Upload and Continue" />
          <Gap height={30} />
          <Link title="Skip for this" align="center" size={20} />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 40,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    flex: 1,
    paddingBottom: 70,
  },
  profile: {
    backgroundColor: colors.white,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  page: {flex: 1, backgroundColor: colors.white},
  avatar: {width: 130, height: 130},
  avatarWrapper: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 150 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhoto: {position: 'absolute', bottom: 8, right: 6},
  name: {
    fontSize: 26,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    textAlign: 'center',
  },
  profession: {
    fontSize: 20,
    fontFamily: fonts.primary.normal,
    textAlign: 'center',
    color: colors.text.secondary,
    marginTop: 4,
  },
});
