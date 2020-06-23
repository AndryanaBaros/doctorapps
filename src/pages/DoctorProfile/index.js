import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, ProfileItem} from '../../components';
import Profile from '../../components/molecules/Profile';
import {colors} from '../../utils';

const DoctorProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Doctor Profile" onPress={() => navigation.goBack()}/>
      <Profile name="Nadhira Balqis" desc="Dokter Anak" remove />
      <Gap height={10} />
      <ProfileItem name="Alumnus" desc="Universitas Indonesia" />
      <ProfileItem name="Tempat Praktik" desc="Rumah Sakit Ananda Bekasi" />
      <ProfileItem name="No.STR" desc="0123456789" />
      <View style={styles.btn}>
        <Button title="Start Consultation" onPress={()=> navigation.navigate('Chatting')}/>
      </View>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  btn: {paddingHorizontal: 40, paddingTop: 23},
});
