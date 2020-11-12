import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Header, Button, Link, Gap} from '../../components';
import {ILNullPhoto, IconRemovePhoto, IconAddPhoto} from '../../assets';
import {colors, fonts, storeData} from '../../utils';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import {Fire} from '../../config';

const UploadPhoto = ({navigation, route}) => {
  const {fullname, profession, uid} = route.params;
  const [photoForDB, setPhotoForDB] = useState('');
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILNullPhoto);
  const getImage = () => {
    ImagePicker.launchImageLibrary(
      {quality: 0.5, maxHeight: 200, maxWidth: 200},
      response => {
        if (response.didCancel || response.error) {
        } else {
          const source = {uri: response.uri};

          setPhotoForDB(`data:${response.type};base64, ${response.data}`);
          setPhoto(source);
          setHasPhoto(true);
        }
      },
    );
  };

  const uploadAndContinue = () => {
    Fire.database()
      .ref('users/' + uid + '/')
      .update({photo: photoForDB});

    const data = route.params;
    data.photo = photoForDB;

    storeData('user', data);

    navigation.replace('MainApp');
  };
  return (
    <View style={styles.page}>
      <Header title="Upload Photo" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
            <Image source={photo} style={styles.avatar} />
            {hasPhoto && <IconRemovePhoto style={styles.addPhoto} />}
            {!hasPhoto && <IconAddPhoto style={styles.removePhoto} />}
          </TouchableOpacity>
          <Gap height={26} />
          <View>
            <Text style={styles.name}>{fullname}</Text>
            <Text style={styles.profession}>{profession}</Text>
          </View>
        </View>
        <View>
          <Button
            title="Upload and Continue"
            onPress={uploadAndContinue}
            disable={!hasPhoto}
          />
          <Gap height={30} />
          <Link
            title="Skip for this"
            align="center"
            size={20}
            onPress={() => navigation.replace('MainApp')}
          />
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
  avatar: {width: 130, height: 130, borderRadius: 130 / 2},
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
  removePhoto: {position: 'absolute', bottom: 8, right: 6},
  name: {
    fontSize: 26,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  profession: {
    fontSize: 20,
    fontFamily: fonts.primary.normal,
    textAlign: 'center',
    color: colors.text.secondary,
    marginTop: 4,
    textTransform: 'capitalize',
  },
});
