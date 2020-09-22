/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import play from './assets/play.png';

const DATA = [
  {
    id: '1',
    Name: 'Under Review',
    jobId: 'Job ID:1',
    designtion: 'React Developer',
    submitted: 'submitted on:21/09/2020',
  },
  {
    id: '2',
    Name: 'Under Review',
    designtion: 'java Developer',
    jobId: 'Job ID:1',
    submitted: 'submitted on:21/09/2020',
  },
  {
    id: '3',
    Name: 'Under Review',
    jobId: 'Job ID:2',
    designtion: 'Full Stack developer',
    submitted: 'submitted on:21/09/2020',
  },
  {
    id: '4',
    Name: 'Under Review',
    jobId: 'Job ID:3',
    designtion: 'Full Stack developer',
    submitted: 'submitted on:21/09/2020',
  },
  {
    id: '5',
    Name: 'Under Review',
    jobId: 'Job ID:4',
    designtion: 'Full Stack developer',
    submitted: 'submitted on:21/09/2020',
  },
];
// const alertHandler = () => {
//   alert('!!');
// };
const alertHandler = () => {
  //function to make three option alert
  Alert.alert(
    //title
    'Hello',
    //body
    'Job id is: 1!!',
    [{text: 'OK', onPress: () => console.log('OK Pressed')}],
    {cancelable: true},
  );
};

const Item = ({item, onPress, style}) => (
  <TouchableOpacity onPress={alertHandler} style={[styles.item, style]}>
    <Image source={play} />
    <Text style={styles.title}>{item.Name}</Text>
    <Text>{item.designtion}</Text>
    <Text>{item.jobId}</Text>
    <Text>{item.submitted}</Text>
  </TouchableOpacity>
);

const LatestCard = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{backgroundColor}}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    display: 'flex',
    flexDirection: 'row',
  },
  item: {
    // width: '20%',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 14,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default LatestCard;
