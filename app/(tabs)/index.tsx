import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from
'react-native';

const index = () => {
  return (
  <ScrollView>
  <Text style={{color: 'white', fontSize: 20, marginTop: 92}}>ini tag text</Text>
  <View>
  <Text style={{color: 'white', fontSize: 20}}>ini juga sama</Text>
  <Image
  source={{
    uri: 'https://awsimages.detik.net.id/community/media/visual/2017/12/06/6414c1ae-fcd1-49a6-8316-4a71c29f93ff_43.jpg?w=600&q=90',
    }}
    style={{ width: 200, height: 200 }}
    />
    </View>
    <TextInput //ini tag input
    style={{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    color: 'white'
    }}
    defaultValue="Pesan"
    />
    </ScrollView>
    );
    }
    export default index;