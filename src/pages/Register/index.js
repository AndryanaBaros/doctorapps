import React, { useState } from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, Gap, Header, Input, Loading} from '../../components';
import {Fire} from '../../config';
import {colors, useForm} from '../../utils';
import { showMessage, hideMessage } from "react-native-flash-message";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { color } from 'react-native-reanimated';
// import {YellowBox} from 'react-native';
// YellowBox.ignoreWarnings(['Warning: ...']);

const Register = ({navigation}) => {
  const [form, setForm] = useForm({
    fullname: '',
    profession: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const onContinue = () => {
    console.log(form);
    setLoading(true);
    Fire.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then(succes => {
        setLoading(false);
        setForm('reset');
        console.log('register succes: ', succes);
      })
      .catch(error => {
        const errorMessage = error.message;
        setLoading(false);
        showMessage({
          message: errorMessage,
          type: 'danger',
          backgroundColor: colors.warning,
          color: colors.white,
        });
        console.log('error: ', error);
        // ...
      });
    // navigation.navigate('UploadPhoto');
  };
  return (
    <>
      <View style={styles.page}>
        <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <Input
            label="Full Name"
            value={form.fullname}
            onChangeText={value => setForm('fullname', value)}
          />
          <Gap height={24} />
          <Input
            label="Pekerjaan"
            value={form.profession}
            onChangeText={value => setForm('profession', value)}
          />
          <Gap height={24} />
          <Input
            label="Email Adress"
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Gap height={24} />
          <Input
            label="Password"
            value={form.password}
            onChangeText={value => setForm('password', value)}
            secureTextEntry
          />
          <Gap height={55} />
          <Button title="Continues" onPress={onContinue} />
          <Gap height={40} />
        </ScrollView>
      </View>
      {loading && <Loading />}
    </>
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