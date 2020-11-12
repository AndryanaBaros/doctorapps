import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {ILLogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';
import {Fire} from '../../config';
import {colors, fonts, showError, storeData, useForm} from '../../utils';

const Login = ({navigation}) => {
  const [form, setForm] = useForm({email: '', password: ''});
  const dispatch = useDispatch();

  const login = () => {
    dispatch({type: 'SET_LOADING', value: true});
    Fire.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then(res => {
        dispatch({type: 'SET_LOADING', value: false});

        Fire.database()
          .ref(`users/${res.user.uid}`)
          .once('value')
          .then(resDB => {
            if (resDB.val()) {
              storeData('user', resDB.val());
              navigation.replace('MainApp');
            }
          });
      })
      .catch(err => {
        dispatch({type: 'SET_LOADING', value: false});
        showError(err.message);
      });
  };
  return (
    <>
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={40} />
          <ILLogo />
          <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
          <Input
            label="Email Adress"
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Gap height={26} />
          <Input
            label="Password"
            value={form.password}
            onChangeText={value => setForm('password', value)}
          />
          <Gap height={12} />
          <Link title="Forgot My Password" size={14} />
          <Gap height={35} />
          <Button title="Sign In" onPress={login} />
          <Gap height={20} />
          <Link
            title="Create New Account"
            size={18}
            align="center"
            onPress={() => navigation.navigate('Register')}  
          />
        </ScrollView>
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {paddingHorizontal: 40, backgroundColor: colors.white, flex: 1},
  title: {
    fontSize: 25,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginBottom: 40,
    marginTop: 45,
    maxWidth: 300,
  },
});
