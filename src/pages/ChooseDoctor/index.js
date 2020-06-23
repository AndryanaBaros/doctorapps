import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  DummyDoctor1,
  DummyDoctor4,
  DummyDoctor5,
  DummyDoctor7,
  DummyDoctor8,
} from '../../assets';
import {Header, ListDoctor} from '../../components';
import {colors} from '../../utils';

const ChooseDoctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        type="dark"
        title="Pilih Dokter Anak"
        onPress={() => navigation.goBack()}
      />
      <ListDoctor
        type="next"
        profile={DummyDoctor4}
        name="Ana Hafidho"
        desc="Wanita"
        onPress={() => navigation.navigate('Chatting')}
      />
      <ListDoctor
        type="next"
        profile={DummyDoctor5}
        name="Francisca Cindy"
        desc="Wanita"
      />
      <ListDoctor
        type="next"
        profile={DummyDoctor1}
        name="Yulianti"
        desc="Wanita"
      />
      <ListDoctor type="next" profile={DummyDoctor7} name="Baros" desc="Pria" />
      <ListDoctor
        type="next"
        profile={DummyDoctor8}
        name="Amel Mawaddah"
        desc="Wanita"
      />
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
});
