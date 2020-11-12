import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import {ILNullPhoto} from '../../assets';
import {Button, Gap, Header, Input} from '../../components';
import Profile from '../../components/molecules/Profile';
import {Fire} from '../../config';
import {colors, getData, showError, storeData} from '../../utils';

const UpdateProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullname: '',
    profession: '',
    email: '',
    photo: ILNullPhoto,
  });
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(ILNullPhoto);
  const [photoForDB, setPhotoForDB] = useState('');

  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      setPhoto({uri: res.photo});
      setProfile(data);
    });
  }, []);

  const update = () => {
    if (password.length > 0) {
      if (password.length < 6) {
        showError(err.message);
      } else {
        updatePassword();
        updateProfileData();
        navigation.replace('MainApp');
      }
    } else {
      updateProfileData();
      navigation.replace('MainApp');
    }
  };
  const updatePassword = () => {
    Fire.auth().onAuthStateChanged(user => {
      if (user) {
        user.updatePassword(password).catch(err => {
          showError(err.message);
        });
      }
    });
  };

  const updateProfileData = () => {
    const data = profile;
    data.photo = photoForDB;
    Fire.database()
      .ref(`users/${profile.uid}/`)
      .update(profile)
      .then(() => {
        storeData('user', data);
      })
      .catch(err => {
        showError(err.message);
      });
  };
  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };
  const getImage = () => {
    ImagePicker.launchImageLibrary(
      {quality: 0.5, maxHeight: 200, maxWidth: 200},
      response => {
        if (response.didCancel || response.error) {
        } else {
          const source = {uri: response.uri};

          setPhotoForDB(`data:${response.type};base64, ${response.data}`);
          setPhoto(source);
        }
      },
    );
  };

  return (
    <ScrollView style={styles.page} showsVerticalScrollIndicator={false}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Profile remove photo={photo} onPress={getImage} />
      <View style={styles.content}>
        <Input
          label="Fullname"
          value={profile.fullname}
          onChangeText={value => changeText('fullname', value)}
        />
        <Gap height={24} />
        <Input
          label="Pekerjaan"
          value={profile.profession}
          onChangeText={value => changeText('profession', value)}
        />
        <Gap height={24} />
        <Input label="Email" value={profile.email} disable />
        <Gap height={24} />
        <Input
          label="Password"
          secureTextEntry
          value={password}
          onChangeText={value => setPassword(value)}
        />
        <Gap height={24} />
        <Button title="Save Profile" onPress={update} />
        <Gap height={24} />
      </View>
    </ScrollView>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {padding: 40},
});
