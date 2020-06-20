import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {colors, fonts} from '../../../utils';
import Gap from '../Gap';

const Input = ({label}) => {
  return (
    <View>
      <Text style={styles.title}>{label}</Text>
      <Gap height={12}/>
      <TextInput style={styles.input} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 12,
  },
  title: {
    fontSize: 20,
    color: colors.text.secondary,
    fontFamily: fonts.primary[300],
  },
});
