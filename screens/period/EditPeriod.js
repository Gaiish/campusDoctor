import React, {Component} from 'react';
import {Platform, AsyncStorage, ScrollView, StyleSheet, Share, Text, Modal, View, StatusBar, Picker, TextInput, KeyboardAvoidingView, Image, TouchableHighlight, TouchableOpacity, Linking} from 'react-native';
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { Calendar, CalendarList, Agenda} from 'react-native-calendars';
import DatePicker from 'react-native-datepicker';
var moment = require('moment')


export default class EditPeriod extends Component {
  state = {
    numofperiod: 4,
    lengthofperiod: 21,
    perioddate: new Date(),
    periodarray: [],
  }

  _storeData = async () => {
    var periodData = {
      numofperiod: this.state.numofperiod,
      lengthofperiod: this.state.lengthofperiod,
      perioddate: this.state.perioddate
    }
    var pickedperioddate = moment(this.state.perioddate).format("YYYY-MM-D");
    for (var i = 0; i < this.state.numofperiod; i++){
      var periodarray = moment(this.state.perioddate).add(1, this.state.perioddate).format("YYYY-MM-D");
      periodarray.push(periodarray); 
      this.setState({periodarray})
    }
    alert(this.state.periodarray)
      try {
        await AsyncStorage.setItem('@key_period', JSON.stringify(periodData));
        this.props.navigation.navigate('BottomNavigator')
        console.log("Data saved")
      } catch (error) {
        // Error saving data
      }
    
  }

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#263c91', '#6f82c6', '#d71a3a']} style={{height: 80, marginBottom: 10,}}>
          <View style={{height: 24,}}>
            <StatusBar barStyle = "light-content" hidden = {false} backgroundColor={'transparent'} translucent = {true}/>
          </View>

          <View style={{height: 56, flexDirection: 'row',}}>
            <View style={{alignItems: 'center', justifyContent: 'center',}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('BottomNavigator')}>
                <Icon name="arrow-back" style={{paddingLeft: 15, paddingRight: 45, color: '#ffffff'}} size={30} />
              </TouchableOpacity>
            </View>

            <View style={{alignItems:  'center', justifyContent: 'center',}}>
              <Text style={{textAlign: 'center', color: '#ffffff', fontSize: 20 }}>Preferences</Text>
            </View>
          
          </View>
        </LinearGradient>

        <View style={{flex:1,}}>
          <ScrollView>
            <KeyboardAvoidingView style={{flex: 1, marginHorizontal: 10}} behavior="padding" enabled>
              <Text style={{textAlign: 'center', fontSize: 20, color: '#6f82c6', fontWeight: 'bold', marginVertical: 10}}>Preferences</Text>
                <View style={{marginHorizontal: 10}}>
                  <Text style={{fontSize: 16, fontStyle: 'normal', color: '#6f82c6', paddingVertical: 5, fontWeight: '700',}}>Date of first period</Text>
                  <Text style={{fontSize: 12, fontStyle: 'normal', color: '#6f82c6', paddingBottom: 5, fontWeight: '700',}}>Tap the date box to pick date</Text>
                  <DatePicker
                    style={{width: 250, marginVertical: 10}}
                    date={this.state.perioddate}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate= {moment().format("YYYY-MM-D")}
                    maxDate="2025-09-20"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0,
                      },
                      dateInput: {
                        marginLeft: 36,
                      },
                      dateText: {
                        color: '#6f82c6',
                      },
                      // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(perioddate) => {this.setState({perioddate: perioddate})}}
                  />
                  <Text style={{fontSize: 16, fontStyle: 'normal', color: '#6f82c6', paddingVertical: 5, fontWeight: '700',}}>Number of period days</Text>
                  <TextInput onChangeText={(numofperiod)=>this.setState({numofperiod})} returnKeyType='next' placeholder="4" keyboardType="numeric" maxLength = {31} style={{textAlign: 'left', height: 40, color: '#6f82c6', borderBottomColor: '#6f82c6', borderBottomWidth: 2, marginVertical: 7}}/>
                  <Text style={{fontSize: 16, fontStyle: 'normal', color: '#6f82c6', paddingVertical: 5, fontWeight: '700',}}>Length of cycle</Text>
                  <TextInput onChangeText={(lengthofperiod)=>this.setState({lengthofperiod})} returnKeyType='done' placeholder="21" keyboardType="numeric" maxLength = {35} style={{textAlign: 'left', height: 40, color: '#6f82c6', borderBottomColor: '#6f82c6', borderBottomWidth: 2, marginVertical: 7}}/>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20,}}>
                  <View style={{justifyContent: 'flex-start', marginHorizontal: 15,}}>
                    <TouchableOpacity onPress={()=>this._storeData()} style={{height: 50, width: 50, borderRadius: 25, backgroundColor: '#6f82c6', justifyContent: 'center', alignItems: 'center',}}>
                      <Icon name="checkmark" style={{paddingHorizontal: 15, paddingVertical: 15, color: '#ffffff'}} size={30} />
                    </TouchableOpacity>
                  </View>

                  <View style={{justifyContent: 'flex-end', marginHorizontal: 15,}}>
                    <TouchableOpacity onPress = {() => {this.props.navigation.navigate('BottomNavigator')}} style={{height: 50, width: 50, borderRadius: 25, backgroundColor: '#6f82c6', justifyContent: 'center', alignItems: 'center',}}>
                      <Icon name="close" style={{paddingHorizontal: 15, paddingVertical: 15, color: '#ffffff'}} size={30} />
                    </TouchableOpacity>
                  </View>  
                </View>
            </KeyboardAvoidingView>
          </ScrollView>    
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
  modal: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
