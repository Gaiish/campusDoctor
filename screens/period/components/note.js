import React, {Component} from 'react';
import {Platform, AsyncStorage, StyleSheet, Text, View, StatusBar, KeyboardAvoidingView, Picker, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from 'react-native-datepicker';
var moment = require('moment')

export default props => (
  <View style={{marginHorizontal: 10,}}>
    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12, borderColor: '#6f82c6', borderRadius: 4, borderWidth: 2,}}>

      <View style={{flex: 1, paddingHorizontal: 10, paddingVertical: 5,}}>
        
        <View style={{flexDirection: 'row', paddingTop: 10, paddingBottom: 3,}}>
          <View>  
            <Text style={{ fontSize: 16, color: '#6f82c6', fontStyle: 'italic', }}>{props.note}</Text>
          </View>
        </View>        

      </View>  

      <View style={{justifyContent: 'flex-start', alignItems: 'flex-end',}}>
        <TouchableOpacity onPress={() => {props.handleDelete(props.position)}}style={{height: 24, width: 24, backgroundColor: '#6f82c6', justifyContent: 'center', alignItems: 'center',
          borderColor: '#6f82c6', borderRadius: 4, borderWidth: 1,}}>
          <Text style={{textAlign: 'center', color: '#ffffff', fontSize: 12,}}>Del</Text>
        </TouchableOpacity>
      </View>
    
    </View>
  </View>
);
