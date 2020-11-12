import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ILNullPhoto} from '../../assets';
import {Header, ListDoctor} from '../../components';
import Profile from '../../components/molecules/Profile';
import {Fire} from '../../config';
import {colors, getData, showError} from '../../utils';

const UserProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullname: '',
    profession: '',
    photo: ILNullPhoto,
  });
  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      data.photo = {uri: res.photo};
      setProfile(data);
    });
  }, []);

  const signOut = () => {
    Fire.auth()
      .signOut()
      .then(() => {
        navigation.replace('GetStarted');
      })
      .catch(err => {
        showError(err.message);
      });
  };
  return (
    <View style={styles.container}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      {profile.fullname.length > 0 && (
        <Profile
          name={profile.fullname}
          desc={profile.profession}
          photo={profile.photo}
        />
      )}
      <View style={styles.desc}>
        <ListDoctor
          name="Edit Profile"
          desc="Last Update Yesterday"
          type="next"
          icon="edit-profile"
          onPress={() => navigation.navigate('UpdateProfile')}
        />
        <ListDoctor
          name="Language"
          desc="Last Update Yesterday"
          type="next"
          icon="language"
        />
        <ListDoctor
          name="Give Us Rate"
          desc="Last Update Yesterday"
          type="next"
          icon="rate"
        />
        <ListDoctor
          name="Sign Out"
          desc="Last Update Yesterday"
          type="next"
          icon="help"
          onPress={signOut}
        />
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {backgroundColor: colors.white, flex: 1},
  desc: {paddingTop: 16},
});
