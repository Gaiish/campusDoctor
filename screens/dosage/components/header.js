import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, KeyboardAvoidingView, Picker, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

export default () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTxt}> All Notes </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#5F85F0"
  },
  headerTxt: {
    fontSize: 24,
    paddingTop: 25,
    paddingLeft: 20,
    color: "#FFF"
  }
});
