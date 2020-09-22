import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import JobStyle from './JobsStyle';
import Card from './Card';
import LatestCard from './LatestCard';
import nitification from './assets/nitification.png';
import microphone from './assets/microphone.png';
import answer from './assets/answer.png';

const styles = StyleSheet.create(JobStyle);

const Jobs = () => {
  const simpleAlertHandler = () => {
    alert('Hello Lakshmi, are you looking for status of job!!');
  };
  const alertHandler = () => {
    alert('Hello Lakshmi, you have new Notification!!');
  };

  return (
    <View>
      <View style={styles.mainContainer}>
        <View style={styles.notification}>
          <TouchableOpacity onPress={simpleAlertHandler}>
            <Image source={answer} />
          </TouchableOpacity>
          <TouchableOpacity onPress={alertHandler}>
            <Image source={nitification} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Image style={styles.microphone} source={microphone} />
          </TouchableOpacity>
        </View>
        <View style={styles.Container}>
          <Text style={styles.text}>pending reviewes</Text>
          <Card />
          <Text style={styles.Latesttext}>Latest Jobs</Text>
          <LatestCard />
        </View>
      </View>
    </View>
  );
};

export default Jobs;
