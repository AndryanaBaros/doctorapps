import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, Input, Button, Gap} from '../../components';
import Profile from '../../components/molecules/Profile';
import {colors} from '../../utils';
import {ScrollView} from 'react-native-gesture-handler';

const UpdateProfile = ({navigation}) => {
  return (
    <ScrollView style={styles.page} showsVerticalScrollIndicator={false}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Profile remove />
      <View style={styles.content}>
        <Input label="Fullname" />
        <Gap height={24} />
        <Input label="Pekerjaan" />
        <Gap height={24} />
        <Input label="Email" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={24} />
        <Button
          title="Save Profile"
          onPress={() => navigation.goBack('UserProfile')}
        />
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
