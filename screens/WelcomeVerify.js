import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, KeyboardAvoidingView, Picker, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

export default class WelcomeVerify extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#263c91', '#6f82c6', '#d71a3a']} style={{height: 80, marginBottom: 10,}}>
          <View style={{height: 24,}}>
            <StatusBar barStyle = "light-content" hidden = {false} backgroundColor={'transparent'} translucent = {true}/>
          </View>

          <View style={{height: 56, flexDirection: 'row',}}>
            <View style={{alignItems: 'center', justifyContent: 'center',}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                <Icon name="arrow-back" style={{paddingLeft: 15, paddingRight: 25, color: '#ffffff'}} size={30} />
              </TouchableOpacity>
            </View>

            <View style={{alignItems:  'center', justifyContent: 'center',}}>
              <Text style={{textAlign: 'center', color: '#ffffff', fontSize: 20 }}>Enter Code for Verification</Text>
            </View>
          </View>
        </LinearGradient>

        <View style={{flex: 1}}>
          <ScrollView>
            <KeyboardAvoidingView style={{flex: 1, paddingHorizontal: 10}} behavior="padding" enabled>
              <View style={{marginVertical: 15,}}>
                <Text style={{textAlign: 'center', fontSize: 13, fontStyle: 'italic', color: '#00528e',}}>A code has been sent to your mobile number for verification.</Text>
                <TextInput placeholder="Enter verification code" style={{textAlign: 'left', height: 40, color: '#00528e', borderBottomColor: '#00528e', borderBottomWidth: 2, marginVertical: 7}}/>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'flex-end', marginVertical: 15,}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Dash')} style={{height: 50, width: 50, borderRadius: 25, backgroundColor: '#00528e', justifyContent: 'center', alignItems: 'center',}}>
                  <Icon name="arrow-forward" style={{paddingHorizontal: 15, paddingVertical: 15, color: '#ffffff'}} size={30} />
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>    
        </View>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#263c91', '#6f82c6', '#d71a3a']} style={{ width: '100%', marginTop: 13,}}>
          <Text style={{color: '#ffffff', paddingVertical: 7, textAlign: 'center', fontSize: 16, fontStyle: 'italic' }}>CampusDoctor</Text>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  
});
