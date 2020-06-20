import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ILLogo} from '../../assets';
import {Input, Button, Link, Gap} from '../../components';
import { colors, fonts } from '../../utils';

const Login = () => {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input label="Email Adress" />
      <Gap height={26} />
      <Input label="Password" />
      <Gap height={12} />
      <Link title="Forgot My Password" size={14}/>
      <Gap height={55} />
      <Button title="Sign In"/>
      <Gap height={40} />
      <Link title="Create New Account" size={20} align="center"/>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {padding: 40, backgroundColor: colors.white, flex: 1},
  title: {
    fontSize: 25,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginBottom: 40,
    marginTop: 45,
    maxWidth: 300,
  },
});
