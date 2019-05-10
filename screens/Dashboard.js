import React, {Component} from 'react';
import {Platform, AsyncStorage, ScrollView, StyleSheet, Share, Text, Modal, View, StatusBar, Picker, TextInput, KeyboardAvoidingView, Image, TouchableHighlight, TouchableOpacity, Linking} from 'react-native';
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import DashboardViews from './components/DashboardViews';

export default class Dashboard extends Component {
  state = {
    label: '',
    imageUri: '',
    modalVisible: false,
    doctor: '',
    fullname: '',
    email: '',
    mobilenumber: '',
    message: ''
  }

  _storeData = async () => {
    var appointmentData = {
      fullname: this.state.fullname,
      email: this.state.email,
      mobilenumber: this.state.mobilenumber,
      message: this.state.message,
      doctor: this.state.doctor
    }
    try {
      await AsyncStorage.setItem('@key_appointment', JSON.stringify(appointmentData));
      alert(this.state.doctor)
      this.toggleModal(!this.state.modalVisible)
      console.log("Data saved")
    } catch (error) {
      // Error saving data
    }
  }

  componentDidMount(){
    console.log('componentDidMount')
    AsyncStorage.getItem("@key_appointment").then((r)=>{
      var appointmented = JSON.parse(r)
      console.log('r:'+r)
     this.setState({fullname: appointmented.fullname}),
     this.setState({mobilenumber: appointmented.mobilenumber}),
     this.setState({email: appointmented.email}),
     this.setState({message: appointmented.message}),
     this.setState({doctor: appointmented.doctor})
    })
  }

   toggleModal(visible) {
      this.setState({ modalVisible: visible });
   }

  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    let {label, imageUri, doctor, fullname, email, mobilenumber, message} = this.state
    
    return (
      <View style={{flex: 1}}>

        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#263c91', '#6f82c6', '#d71a3a']} style={{height: 80, marginBottom: 10,}}>
          <View style={{height: 24,}}>
            <StatusBar barStyle = "light-content" hidden = {false} backgroundColor={'transparent'} translucent = {true}/>
          </View>

          <View style={{height: 56, flexDirection: 'row', alignItems:  'center', justifyContent: 'center',}}>
            <View style={{alignItems:  'center', justifyContent: 'center',}}>
              <Text style={{textAlign: 'center', color: '#ffffff', fontSize: 22 }}>Campus Doctor</Text>
            </View>
          </View>
        
        </LinearGradient>

        <View style={{flex: 1, backgroundColor: '#ffffff'}}>
          <View style={{flex: 1, marginHorizontal: 10, alignItems: 'center', justifyContent:'center',}}>
            <View style={{flex: 1,flexDirection: 'row', alignItems: 'center',  marginTop: 7, marginBottom: 7, justifyContent: 'space-between',}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Chat')} style={{flex: 1, justifyContent: 'space-between', alignItems: 'center',}}>
                <DashboardViews imageUri={require('../assests/doctor.png')} label = "Chat with Doctor"/>
              </TouchableOpacity>
              
              <TouchableOpacity onPress = {() => {this.toggleModal(true)}} style={{flex: 1, justifyContent: 'space-between', alignItems: 'center',}}>
                <DashboardViews imageUri={require('../assests/appointment.png')} label = "Make Appointment"/>
              </TouchableOpacity>
              
              <View style={{alignItems: 'flex-start', justifyContent:'flex-start',}}>
                <Modal animationType = {"slide"} transparent = {true} visible = {this.state.modalVisible} onRequestClose = {() => { console.log("Modal has been closed.") } }>
                	<View style = {styles.modal}>
                    <Text style={{textAlign: 'center', fontSize: 20, color: '#00528e', fontWeight: 'bold', marginVertical: 10}}>APPOINTMENT FORM</Text>
                  		<ScrollView>
                        <View style={{marginHorizontal: 10,}}>
                        <TextInput placeholder="Your full name" onChangeText={(fullname)=>this.setState({fullname})} style={{fontSize: 14, textAlign: 'left', color: '#00528e', height: 40, borderBottomColor: '#00528e', borderBottomWidth: 2, marginVertical: 7}}/>
                        <TextInput placeholder="Your email" onChangeText={(email)=>this.setState({email})} keyboardType='email-address' returnKeyType='next' style={{textAlign: 'left', height: 40, color: '#00528e', borderBottomColor: '#00528e', borderBottomWidth: 2, marginVertical: 7}}/>
                        <TextInput placeholder="Your mobile number" onChangeText={(mobilenumber)=>this.setState({mobilenumber})} keyboardType='phone-pad' style={{textAlign: 'left', height: 40, color: '#00528e', borderBottomColor: '#00528e', borderBottomWidth: 2, marginVertical: 7}}/>
                        
                        <TextInput
                          style={styles.TextInputStyleClass}
                          onChangeText={(message)=>this.setState({message})}
                          underlineColorAndroid="transparent"
                          placeholder={"Type Message here."}
                          placeholderTextColor={"#00528e"}
                          numberOfLines={7}
                          multiline={true}
                        />

                        <Picker selectedValue={this.state.doctor} style={{fontSize: 18, height: 50, width: 300, color: '#00528e',}} onValueChange={(itemValue, itemIndex) => this.setState({doctor: itemValue}) }>
                          <Picker.Item label="GENERAL DOCTOR" value="General Doctor" />
                          <Picker.Item label="SKIN DOCTOR" value="Skin Doctor" />
                          <Picker.Item label="SEXUAL HEALTH DOCTOR" value="Sexual Health Doctor" />
                        </Picker>
                      </View>
                      </ScrollView>

                      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginVertical: 10,}}>
                        <View style={{justifyContent: 'flex-start', marginHorizontal: 15,}}>
                          <TouchableOpacity onPress={()=>this._storeData()} style={{height: 40, width: 40, borderRadius: 20, backgroundColor: '#00528e', justifyContent: 'center', alignItems: 'center',}}>
                            <Icon name="checkmark" style={{paddingHorizontal: 10, paddingVertical: 10, color: '#ffffff'}} size={20} />
                          </TouchableOpacity>
                        </View>

                        <View style={{justifyContent: 'flex-end', marginHorizontal: 15,}}>
                          <TouchableOpacity onPress = {() => {this.toggleModal(!this.state.modalVisible)}} style={{height: 40, width: 40, borderRadius: 20, backgroundColor: '#00528e', justifyContent: 'center', alignItems: 'center',}}>
                            <Icon name="close" style={{paddingHorizontal: 10, paddingVertical: 10, color: '#ffffff'}} size={20} />
                          </TouchableOpacity>
                        </View>  
                      </View>

                      
               		</View>
                  <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#263c91', '#6f82c6', '#d71a3a']} style={{ width: '100%',}}>
                    <Text style={{color: '#ffffff', paddingVertical: 7, textAlign: 'center', fontSize: 16, fontStyle: 'italic' }}>CampusDoctor</Text>
                  </LinearGradient>
            	</Modal>
              </View>
            
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center',  marginVertical: 7, justifyContent: 'space-between',}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Dose')} style={{flex: 1, justifyContent: 'space-between', alignItems: 'center',}}>
                <DashboardViews imageUri={require('../assests/medicine.png')} label = "Dosage Reminder"/>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => this.props.navigation.navigate('BottomNavigator')} style={{flex: 1, justifyContent: 'space-between', alignItems: 'center',}}>
                <DashboardViews imageUri={require('../assests/compress.png')} label = "Period Tracker"/>
              </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 7, justifyContent: 'space-between',}}>
              <TouchableOpacity style={{flex: 1, justifyContent: 'space-between', alignItems: 'center',}} onPress={this.onShare} >
                <DashboardViews imageUri={require('../assests/network.png')} label = "Share With Friends"/>
              </TouchableOpacity>

              <TouchableOpacity style={{flex: 1, justifyContent: 'space-between', alignItems: 'center',}} onPress={ () => Linking.openURL('https://www.thecampusdoctor.com')}>
                <DashboardViews imageUri={require('../assests/more.png')} label = "More"/>
              </TouchableOpacity>
            </View>

          </View>

          <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#263c91', '#6f82c6', '#d71a3a']} style={{ width: '100%',}}>
            <Text style={{color: '#ffffff', paddingVertical: 7, textAlign: 'center', fontSize: 16, fontStyle: 'italic' }}>CampusDoctor</Text>
          </LinearGradient>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	modal: {
      flex: 1,
      alignItems: 'center', 
      backgroundColor: '#ffffff',
      borderTopColor: '#00528e',
      borderTopWidth: 2,
   },
   TextInputStyleClass:{
      paddingHorizontal: 10,
      paddingVertical: 10,
      height: 120,
      justifyContent: 'flex-start', 
      alignContent: 'flex-start', 
      marginVertical: 7,
      borderWidth: 2,
      borderColor: '#00528e',
      borderRadius: 4,
      backgroundColor : "#ffffff",
    },
});
