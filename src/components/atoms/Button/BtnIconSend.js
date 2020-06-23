import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IconSend, IconSendActive} from '../../../assets';
import {colors} from '../../../utils';

const BtnIconSend = ({disable}) => {
  return (
    <View style={styles.container(disable)}>
      {disable && <IconSend />}
      {!disable && <IconSendActive />}
    </View>
  );
};

export default BtnIconSend;

const styles = StyleSheet.create({
  container: disable => ({
    backgroundColor: disable ? colors.nonActive : colors.secondary,
    width: 45,
    height: 45,
    borderRadius: 10,
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 8,
    paddingLeft: 8,
  }),
});
