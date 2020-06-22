import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  IconDoctorAnak,
  IconDoctorObat,
  IconDoctorPsikiater,
  IconDoctorUmum,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const DoctorCategory = ({category, onPress}) => {
  const Icon = () => {
    if (category === 'dokter obatmum') {
      return <IconDoctorUmum style={styles.illustration} />;
    }
    if (category === 'psikiater') {
      return <IconDoctorPsikiater style={styles.illustration} />;
    }
    if (category === 'dokter obat') {
      return <IconDoctorObat style={styles.illustration} />;
    }
    return <IconDoctorUmum style={styles.illustration} />;
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon />
      <Text style={styles.label}>Saya butuh</Text>
      <Text style={styles.category}>{category}</Text>
    </TouchableOpacity>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.cardColor,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
    width: 100,
    height: 130,
  },
  illustration: {marginBottom: 28},
  label: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
  },
  category: {
    fontSize: 14,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
