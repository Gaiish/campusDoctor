import React, {Component} from 'react';
import {Platform, AsyncStorage, StyleSheet, Text, View, StatusBar, KeyboardAvoidingView, Picker, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from 'react-native-datepicker';
var moment = require('moment')

import Header from "./components/header";
import Body from "./components/body";
import AddNote from "./components/addNote";


export default class Notebook extends Component {
  
  state = {
    notes: [],
    showAddNote: false,
    newNote: "",
    showNoteDetail: false,
    currentNote: "",
  };

  loadNotes = async () => {
    try {
      let storedNotes = await AsyncStorage.getItem("notes");
      if(storedNotes)
        this.setState({notes: JSON.parse(storedNotes)});
    }catch (e) {
      console.log(e)
      alert(e);
    }
  };

  componentDidMount(){
    this.loadNotes();
  }

  save() {
    let listOfNotes = this.state.notes;
    let noteToAdd = this.state.newNote;
    listOfNotes.unshift(noteToAdd);
    this.setState({
      notes: listOfNotes,
      showAddNote: false
    });
    AsyncStorage.setItem("notes", JSON.stringify(listOfNotes));
  }

  render() {
    Component;
    if (this.state.showAddNote) {
      return (
          <View style={styles.main}>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#263c91', '#6f82c6', '#d71a3a']} style={{height: 80, marginBottom: 10,}}>
              <View style={{height: 24,}}>
                <StatusBar barStyle = "light-content" hidden = {false} backgroundColor={'transparent'} translucent = {true}/>
              </View>

              <View style={{height: 56, flexDirection: 'row',}}>
                <View style={{alignItems: 'center', justifyContent: 'center',}}>
                  <TouchableOpacity onPress={() =>this.setState({showAddNote: false})}>
                    <Icon name="arrow-back" style={{paddingLeft: 15, paddingRight: 25, color: '#ffffff'}} size={30} />
                  </TouchableOpacity>
                </View>

                <View style={{alignItems:  'center', justifyContent: 'center',}}>
                  <Text style={{textAlign: 'center', color: '#ffffff', fontSize: 20 }}>Add New Note</Text>
                </View>
              </View>
            </LinearGradient>
            <AddNote
                onInputChange={input =>
                    this.setState({
                      newNote: input
                    })
                }
                onSave={() => this.save()}
            />
          </View>
      );
    }

    

    return (
      <View style={styles.main}>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#263c91', '#6f82c6', '#d71a3a']} style={{height: 80, marginBottom: 10,}}>
          <View style={{height: 24,}}>
            <StatusBar barStyle = "light-content" hidden = {false} backgroundColor={'transparent'} translucent = {true}/>
          </View>

          <View style={{height: 56, flexDirection: 'row',}}>
            <View style={{alignItems: 'center', justifyContent: 'center',}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Dash')}>
                <Icon name="arrow-back" style={{paddingLeft: 15, paddingRight: 25, color: '#ffffff'}} size={30} />
              </TouchableOpacity>
            </View>

            <View style={{alignItems:  'center', justifyContent: 'center',}}>
              <Text style={{textAlign: 'center', color: '#ffffff', fontSize: 20 }}>Notebook</Text>
            </View>
          </View>
        </LinearGradient>

        <Body
              notesList={this.state.notes}
              handleDelete={index => {
                let listOfNotes = this.state.notes;
                let newNotes = listOfNotes.filter((note, i) => i !== index);
                this.setState({
                  notes: newNotes
                }, () => AsyncStorage.setItem("notes", JSON.stringify(newNotes)));
              }}
              
          />

          <View style={{justifyContent: 'flex-end', marginHorizontal: 10, alignItems: 'flex-end', marginVertical: 15,}}>
            <TouchableOpacity onPress={() =>this.setState({showAddNote: true})} style={{height: 50, width: 50, borderRadius: 25, backgroundColor: '#6f82c6', justifyContent: 'center', alignItems: 'center',}}>
              <Icon name="add" style={{paddingHorizontal: 15, paddingVertical: 15, color: '#ffffff'}} size={30} />
            </TouchableOpacity>
          </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  btn: {
    position: "absolute",
    bottom: 35,
    right: 30,
    backgroundColor: "#5F85F0",
    width: 60,
    height: 60,
    borderRadius: 30
  },
  btnTxt: {
    fontSize: 45,
    alignSelf: "center",
    color: "#FFF"
  },
  backArrow: {
    fontSize: 28,
    color: "#FFF"
  },
  backBtn: {
    paddingTop: 35,
    paddingLeft: 10
  }
});
