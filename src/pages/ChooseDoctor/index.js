import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  DummyDoctor4,
  DummyDoctor5,
  DummyDoctor6,
  DummyDoctor7,
  DummyDoctor8,
  DummyDoctor1,
} from '../../assets';
import {Header, LisDoctor} from '../../components';
import {colors} from '../../utils';

const ChooseDoctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header type="dark" title="Pilih Dokter Anak" onPress={() => navigation.goBack()}/>
      <LisDoctor
        type="next"
        profile={DummyDoctor4}
        name="Ana Hafidho"
        desc="Wanita"
        onPress={() => navigation.navigate('Chatting')}
      />
      <LisDoctor
        type="next"
        profile={DummyDoctor5}
        name="Francisca Cindy"
        desc="Wanita"
      />
      <LisDoctor
        type="next"
        profile={DummyDoctor1}
        name="Yulianti"
        desc="Wanita"
      />
      <LisDoctor type="next" profile={DummyDoctor7} name="Baros" desc="Pria" />
      <LisDoctor
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
