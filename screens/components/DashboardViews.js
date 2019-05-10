import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';

export default props => {
  return (
    <View style={{height: 140, width: '90%', borderColor: '#00528e', borderRadius: 4, borderWidth: 2, paddingHorizontal: 7, paddingVertical: 7}}>
      <View style={{flex: 1, paddingVertical: 10, justifyContent: 'center', alignItems: 'center',}}>
        <Image style={{height:80, width:80}} source={props.imageUri} />
      </View>

      <View style={{paddingTop: 5, justifyContent: 'center', alignItems: 'center',}}>
        <Text style={{textAlign: 'center', fontSize: 12, color: '#00528e',}}>{props.label}</Text>
      </View>
    </View>
  );
};
