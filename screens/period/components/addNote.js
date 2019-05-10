import React, {Component} from 'react';
import {Platform, AsyncStorage, StyleSheet, Text, View, StatusBar, KeyboardAvoidingView, Picker, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from 'react-native-datepicker';
var moment = require('moment')

export default props => {
  state = {
    date: new Date()
  };

  return (
    <View style={{flex: 1,}}>
      <ScrollView style={{flex: 1}}>
        <KeyboardAvoidingView style={{flex: 1, marginHorizontal: 10,}} behavior="padding" enabled>
          <View style={{flex: 1}}>
            <TextInput placeholder="My note" onChangeText={props.onInputChange} style={{textAlign: 'left', color: '#6f82c6', height: 40, borderBottomColor: '#6f82c6', borderBottomWidth: 2, marginVertical: 7}}/>
            
          </View>
          
          <View style={{justifyContent: 'center', alignItems: 'flex-end', marginVertical: 25,}}>
            <TouchableOpacity onPress={props.onSave} style={{height: 50, width: 50, borderRadius: 25, backgroundColor: '#6f82c6', justifyContent: 'center', alignItems: 'center',}}>
              <Icon name="checkmark" style={{paddingHorizontal: 15, paddingVertical: 15, color: '#ffffff'}} size={30} />
            </TouchableOpacity>
          </View> 
        </KeyboardAvoidingView>  
      </ScrollView>  
    </View>
  );
};
