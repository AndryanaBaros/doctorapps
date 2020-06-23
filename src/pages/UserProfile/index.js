import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Profile from '../../components/molecules/Profile';
import {Header, ListDoctor} from '../../components';
import {colors} from '../../utils';

const UserProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="Profile" onPress={() => navigation.goBack()}/>
      <Profile name="Andryna Baros" desc="Skateboarder" />
      <View style={styles.desc}>
        <ListDoctor
          name="Edit Profile"
          desc="Last Update Yesterday"
          type="next"
          icon="edit-profile"
          onPress={() => navigation.navigate('UpdateProfile')}
        />
        <ListDoctor
          name="Edit Profile"
          desc="Last Update Yesterday"
          type="next"
          icon="language"
        />
        <ListDoctor
          name="Edit Profile"
          desc="Last Update Yesterday"
          type="next"
          icon="rate"
        />
        <ListDoctor
          name="Edit Profile"
          desc="Last Update Yesterday"
          type="next"
          icon="help"
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
