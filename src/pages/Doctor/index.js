import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {DummyDoctor1, DummyDoctor2, DummyDoctor3} from '../../assets';
import {Gap, NewsItem, RatedDoctor} from '../../components';
import DoctorCatergory from '../../components/molecules/DoctorCategory';
import HomeProfile from '../../components/molecules/HomeProfile';
import {Fire} from '../../config';
import {colors, fonts, getData, showError} from '../../utils';

const Doctor = ({navigation}) => {
  const [news, setNews] = useState([]);
  const [categoryDoctor, setCategoryDoctor] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    getNews();
    getCategory();
    getTopRatedDoctors();
  }, []);
  const getCategory = () => {
    Fire.database()
      .ref('category_doc/')
      .once('value')
      .then(res => {
        if (res.val()) {
          const data = res.val();
          const filterData = data.filter(el => el !== null);
          setCategoryDoctor(filterData);
        }
      })
      .catch(err => {
        showError(err.message);
      });
  };

  const getTopRatedDoctors = () => {
    Fire.database()
      .ref('doctors/')
      .orderByChild('rate')
      .limitToLast(3)
      .once('value')
      .then(res => {
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map(key => {
            data.push({
              id: key,
              data: oldData[key],
            });
          });
          setDoctors(data);
        }
      })
      .catch(err => {
        showError(err.message);
      });
  };

  const getNews = () => {
    Fire.database()
      .ref('news/')
      .once('value')
      .then(res => {
        if (res.val()) {
          const data = res.val();
          const filterData = data.filter(el => el !== null);
          console.log('hasil filter :', filterData);
          setNews(filterData);
        }
      })
      .catch(err => {
        showError(err.message);
      });
  };

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={30} />
          <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
          <Text style={styles.welcome}>
            Mau konsulaltasi dengan siapa hari ini?
          </Text>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={18} />
                {categoryDoctor.map(item => {
                  return (
                    <DoctorCatergory
                      key={item.id}
                      category={item.category}
                      onPress={() => navigation.navigate('ChooseDoctor', item)}
                    />
                  );
                })}
                <Gap width={10} />
              </View>
            </ScrollView>
          </View>
          <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
          {doctors.map(doctor => {
            return (
              <RatedDoctor
                key={doctor.id}
                name={doctor.data.fullName}
                profession={doctor.data.profession}
                pic={{uri: doctor.data.photo}}
                onPress={() => navigation.navigate('DoctorProfile', doctor)}
              />
            );
          })}
          <Text style={styles.sectionGoodnews}>GoodNews</Text>
          {news.map(item => {
            return (
              <NewsItem
                title={item.title}
                date={item.date}
                image={item.image}
              />
            );
          })}
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
  category: {flexDirection: 'row', marginBottom: 10},
  wrapperScroll: {marginHorizontal: -16},
  sectionLabel: {
    fontSize: 18,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 20,
    marginBottom: 16,
  },
  sectionGoodnews: {
    marginTop: 5,
    fontSize: 18,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
