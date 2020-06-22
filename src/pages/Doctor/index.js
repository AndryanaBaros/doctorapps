import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { DummyDoctor1, DummyDoctor2, DummyDoctor3, JsonCategoryDoctor } from '../../assets';
import { Gap, NewsItem, RatedDoctor } from '../../components';
import DoctorCatergory from '../../components/molecules/DoctorCategory';
import HomeProfile from '../../components/molecules/HomeProfile';
import { colors, fonts } from '../../utils';

const Doctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={30} />
          <HomeProfile />
          <Text style={styles.welcome}>
            Mau konsulaltasi dengan siapa hari ini?
          </Text>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={16} />
                {JsonCategoryDoctor.data.map(item => {
                  return (
                    <DoctorCatergory
                      key={item.id}
                      category={item.category}
                      onPress={() => navigation.navigate('ChooseDoctor')}
                    />
                  );
                })}
                <Gap width={6} />
              </View>
            </ScrollView>
          </View>
          <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
          <RatedDoctor
            name="Nadhira Balqis"
            profession="Psikiater"
            pic={DummyDoctor1}
          />
          <RatedDoctor
            name="Putra Ganzih Fadilla"
            profession="Dokter Anak"
            pic={DummyDoctor2}
          />
          <RatedDoctor
            name="Susiana"
            profession="Dokter Kandungan"
            pic={DummyDoctor3}
          />
          <Text style={styles.sectionGoodnews}>GoodNews</Text>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 16,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  welcome: {
    fontSize: 22,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 250,
  },
  category: {flexDirection: 'row'},
  wrapperScroll: {marginHorizontal: -16},
  sectionLabel: {
    fontSize: 18,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
  sectionGoodnews: {
    marginTop: 5,
    fontSize: 18,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
