import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, KeyboardAvoidingView, Picker, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

export default class WelcomeLogin extends Component {
  constructor(props) {
    super(props);
  }

  state ={
    language: '',
    languages: '',
  }

  render() {
    let {language, languages} = this.state
    return (
      <View style={styles.container}>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#263c91', '#6f82c6', '#d71a3a']} style={{height: 80, marginBottom: 10,}}>
          <View style={{height: 24,}}>
            <StatusBar barStyle = "light-content" hidden = {false} backgroundColor={'transparent'} translucent = {true}/>
          </View>

          <View style={{height: 56, flexDirection: 'row',}}>
            <View style={{alignItems: 'center', justifyContent: 'center',}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Welcome')}>
                <Icon name="arrow-back" style={{paddingLeft: 15, paddingRight: 25, color: '#ffffff'}} size={30} />
              </TouchableOpacity>
            </View>

            <View style={{alignItems:  'center', justifyContent: 'center',}}>
              <Text style={{textAlign: 'center', color: '#ffffff', fontSize: 20 }}>Enter Login Details</Text>
            </View>
          </View>
        </LinearGradient>

        <View style={{flex: 1,}}>
          <ScrollView>
            <KeyboardAvoidingView style={{flex: 1, paddingHorizontal: 10}} behavior="padding" enabled>
              <View>
                <TextInput placeholder="Your full name" style={{textAlign: 'left', color: '#00528e', height: 40, borderBottomColor: '#00528e', borderBottomWidth: 2, marginVertical: 7}}/>
                <TextInput placeholder="Your email" style={{textAlign: 'left', height: 40, color: '#00528e', borderBottomColor: '#00528e', borderBottomWidth: 2, marginVertical: 7}}/>
                <Picker selectedValue={this.state.language} style={{height: 50, width: 300, color: '#00528e',}} onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue}) }>
                  <Picker.Item label="Male" value="M" />
                  <Picker.Item label="Female" value="F" />
                </Picker>

                <Picker selectedValue={this.state.languages} style={{height: 50, width: 300, color: '#00528e',}} onValueChange={(itemValue, itemIndex) => this.setState({languages: itemValue}) }>
                  <Picker.Item label="Makerere University" value="Mak" />
                  <Picker.Item label="Kyambogo University" value="Kyu" />
                </Picker>  

                <Text style={{textAlign: 'center', fontSize: 18, fontStyle: 'normal', fontWeight: '400', color: '#00528e', paddingVertical: 10,}} >Enter Phone Number for Verification</Text>

                <TextInput placeholder="Your mobile number" style={{textAlign: 'left', height: 40, color: '#00528e', borderBottomColor: '#00528e', borderBottomWidth: 2, marginVertical: 7}}/>
              </View>  

              <View style={{justifyContent: 'center', alignItems: 'flex-end', marginVertical: 15,}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Verify')} style={{height: 50, width: 50, borderRadius: 25, backgroundColor: '#00528e', justifyContent: 'center', alignItems: 'center',}}>
                  <Icon name="arrow-forward" style={{paddingHorizontal: 15, paddingVertical: 15, color: '#ffffff'}} size={30} />
                </TouchableOpacity>
              </View> 
            </KeyboardAvoidingView>
          </ScrollView>  
        </View>

        <View>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#263c91', '#6f82c6', '#d71a3a']} style={{ width: '100%', marginTop: 13,}}>
          <Text style={{color: '#ffffff', paddingVertical: 7, textAlign: 'center', fontSize: 16, fontStyle: 'italic' }}>CampusDoctor</Text>
        </LinearGradient>
      </View>
      
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
