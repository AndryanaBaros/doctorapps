import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ListDoctor} from '../../components';
import {colors, fonts, getData} from '../../utils';
import {Fire} from '../../config';

const Messages = ({navigation}) => {
  const [user, setUser] = useState({});
  const [historyChat, setHistoryChat] = useState({});

  useEffect(() => {
    getDataUserFromLocal();
    const urlHistory = `message/${user.uid}/`;
    Fire.database()
      .ref(urlHistory)
      .on('value', snapshot => {
        console.log('data harigato: ', snapshot.val());
        if (snapshot.val()) {
          const oldData = snapshot.val();
          const data = [];
          Object.keys(oldData).map(key => {
            data.push({
              id: key,
              ...oldData[key],
            });
          });
          console.log('new data history: ', data);
          setHistoryChat(data);
        }
      });
  }, [user.uid]);
  const getDataUserFromLocal = () => {
    getData('user').then(res => {
      setUser(res);
    });
  };

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {historyChat.map(chat => {
          return (
            <ListDoctor
              key={chat.id}
              profile={chat.uidPartner}
              name={chat.uidPartner}
              desc={chat.lastContentChat}
              onPress={() => navigation.navigate('Chatting')}
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
