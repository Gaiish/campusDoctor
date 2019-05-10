import React, {Component} from 'react';
import {Platform, AsyncStorage, StyleSheet, Text, View, StatusBar, KeyboardAvoidingView, Picker, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from 'react-native-datepicker';
var moment = require('moment')

export default props => (
  <View
    style={{
      padding: 20,
      borderBottomWidth: 0.7,
      borderBottomColor: "rgba(0,0,0,0.1)",
      flex: 9
    }}
  >
    <Text style={{ fontSize: 18 }}>{props.note}</Text>
  </View>
);
