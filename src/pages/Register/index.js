import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../components';
import {colors} from '../../utils';
import { NavigationHelpersContext } from '@react-navigation/native';

const Register = ({navigation}) => {
  return (
    <View style={styles.page}>  
      <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
      <View style={styles.content}>
        <Input label="Full Name" />
        <Gap height={24} />
        <Input label="Pekerjaan" />
        <Gap height={24} />
        <Input label="Email Adress" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={55} />
        <Button title="Continues" onPress={() => navigation.navigate('UploadPhoto')}/>
        <Gap height={40} />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  content: {padding: 40, paddingTop: 25},
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});