import React, {Component} from 'react';
import {Platform, AsyncStorage, StyleSheet, Text, View, StatusBar, KeyboardAvoidingView, Picker, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from 'react-native-datepicker';
var moment = require('moment')

import Note from "./note";

export default class Body extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.list}>
        {
          this.props.notesList.map((note, i) => (
            <Note
              key={i}
              position={i}
              note={note}
              handleDelete={index => {
                this.props.handleDelete(index);
              }}
              
            />
          ))
        }
      </View>
    );
  }
}
const styles = StyleSheet.create({
  list: {
    flex: 9
  },
  img: {
    margin: 60,
    width: 260,
    height: 260
  }
});
