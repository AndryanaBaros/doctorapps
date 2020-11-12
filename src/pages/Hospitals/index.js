import React, {useState, useEffect} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {
  ILHospitals,
  ILHospitals1,
  ILHospitals2,
  ILHospitals3,
} from '../../assets';
import {ListHospital} from '../../components';
import {colors, fonts, showError} from '../../utils';
import {Fire} from '../../config';

const Hospitals = () => {
  const [hospitals, setHospitals] = useState([]);
  useEffect(() => {
    Fire.database()
      .ref('hospitals/')
      .once('value')
      .then(res => {
        if (res.val()) {
          setHospitals(res.val());
        }
      })
      .catch(err => {
        showError(err.message);
      });
  }, []);

  return (
    <View style={styles.page}>
      <ImageBackground source={ILHospitals} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.desc}>3 Tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        {hospitals.map(item => {
          return (
            <ListHospital
              key={item.id}
              title={item.title}
              address={item.address}
              image={item.image}
            />
          );
        })}
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
