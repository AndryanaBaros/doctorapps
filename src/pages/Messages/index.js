import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LisDoctor} from '../../components';
import {colors, fonts} from '../../utils';
import {DummyDoctor1, DummyDoctor2, DummyDoctor3} from '../../assets';

const Messages = () => {
  const [doctors] = useState([
    {
      id: 1,
      profile: DummyDoctor1,
      name: 'Nadhira Balis',
      desc: 'Baik bu,terimakasih banyak atas wak...',
    },
    {
      id: 2,
      profile: DummyDoctor2,
      name: 'Putra Ganzih Fadilah',
      desc: 'Baik bu,terimakasih banyak atas wak...',
    },
    {
      id: 3,
      profile: DummyDoctor3,
      name: 'Susiana',
      desc: 'Baik bu,terimakasih banyak atas wak...',
    },
  ]);

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {doctors.map(doctor => {
          return (
            <LisDoctor
              key={doctor.id}
              profile={doctor.profile}
              name={doctor.name}
              desc={doctor.desc}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.secondary, flex: 1},
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.primary[600],
    marginTop: 30,
    marginLeft: 16,
  },
});
