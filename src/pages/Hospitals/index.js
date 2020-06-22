import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {
  ILHospitals,
  ILHospitals1,
  ILHospitals2,
  ILHospitals3,
} from '../../assets';
import {ListHospital} from '../../components';
import {colors, fonts} from '../../utils';

const Hospitals = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILHospitals} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.desc}>3 Tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospital
          title="Rumah Umum Daerah Bekasi"
          address="Jl.Raya Bekasi no 56"
          pic={ILHospitals1}
        />
        <ListHospital
          title="Rumah Sakit Taman Harapan Baru"
          address="Jl.Pondok Ungu Permai"
          pic={ILHospitals2}
        />
        <ListHospital
          title="Rumah Sakit Jiwa Anna Medika"
          address="Jl.Raya Teluk Pucung"
          pic={ILHospitals3}
        />
      </View>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.secondary, flex: 1},
  background: {height: 240, alignItems: 'center', paddingTop: 25},
  title: {fontSize: 22, fontFamily: fonts.primary[600], color: colors.white},
  desc: {
    fontSize: 16,
    fontFamily: fonts.primary[300],
    color: colors.white,
    paddingTop: 10,
  },
  content: {
    backgroundColor: colors.white,
    borderRadius: 20,
    flex: 1,
    marginTop: -30,
  },
});
