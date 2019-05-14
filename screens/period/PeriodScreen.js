import React, {Component} from 'react';
import {Platform, AsyncStorage, StyleSheet, Share, Text, Modal, View, StatusBar, Picker, TextInput, KeyboardAvoidingView, Image, TouchableHighlight, TouchableOpacity, Linking} from 'react-native';
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { Calendar, CalendarList, Agenda} from 'react-native-calendars';
var moment = require('moment')



export default class PeriodScreen extends Component {
  constructor(){
    super()

    //this is no longer needed
    //this.state = {
      // numofperiod: 0,
      // lengthofperiod: '',
      // perioddate: '',
    // }




    //here we have to find a way to pass all dates we want to mark at once
    //since markedDates prop accepts an immutable object, which means you can't
    //change it over time or pass to it something from the state
    this.periods = {
      '2019-05-20': {startingDay: true, color: '#d71a3a', textColor: '#ffffff'},
      ...this.markDates(this.getSundaysInYear()),
      //you can add the other markedperiods here
      ...this.markedperiods()
    }
  }




  //periods = () => {

	      //periods[perioddatetwo] = {selected: true, endingDay: true, color: '#d71a3a', textColor: '#ffffff'}

	   // }
	//}

  //this is the function (markDates) that gives us the dates to mark
  //the function that you needed should be similar to this
  //it's simple, it has to just return an object since
  //markedDates wants an object
  markDates(datesArray){
    let markedDates = {}
    for (let i in datesArray){
      markedDates[datesArray[i]] = {selected: true, color: '#d71a3a', textColor: '#ffffff'}
    }
    return markedDates
  }


  //suppose this is the function
  //we make it an async if we choose to use await instead of .then .catch
  async markedperiods(){
    let periods = {}
    // periods[this.state.perioddate] = {selected: true, color: '#d71a3a', textColor: '#ffffff'}
    // return periods

    //___START_____

    let data = await AsyncStorage.getItem("@key_period")
    let parsedData = JSON.parse(data)

    //here you write the code to get the list of dates to mark
    //it's more about making some calculation with the data from AsyncStorage
    //add the dates to the periods object


    return periods

    //_____END_______


  }

  getSundaysInMonth(year, month){
    let sundays = []
    year = parseInt(year)
    month = parseInt(month)
    //small algorithm that will get us the sundays
    //loop through the days of the given month in the given year
    //and check if a day is a 0, which will mean it's a sunday
    //to understand it more try it in the console browser
    //or add more console.log to debug and see what's going on
    for (let i=1; i<=new Date(year, month, 0).getDate(); i++){
      let date = new Date(year, month-1, i)
      if (date.getDay() == 0)
        sundays.push(moment(date).format("YYYY-MM-D"))
    }
    return sundays
  }

  getSundaysInYear(year=2019){
    let sundays = []
    for (let i =1; i<=12; i++){
      sundays = [...sundays, ...this.getSundaysInMonth(year, i)]
    }
    return sundays
  }

  render() {
    let {numofperiod, lengthofperiod, perioddate } = this.state
    //alert(JSON.stringify(this.periods))
    //var periods = {}
	    //var pickeddate = moment(this.state.perioddate).format('D');
	    //var num = parseInt(pickeddate, 10);
	    //var numperiod = parseInt(this.state.numofperiod, 10);
	    //var periodloop = parseInt(pickeddate, 10);
	    //alert(periodloop);
	    //var newnumperiod = (numperiod - 1);
	    //var combined = num + numperiod;
	    //var perioddatetwo = moment(this.state.perioddate).add(newnumperiod, 'days').format("YYYY-MM-D");
	    //var combined = moment(perioddatetwo).format("YYYY-MM-D");
	    //let i;
	    //for(i=0; i < this.state.numofperiod; i++){
	      //periods[this.state.perioddate] = {startingDay: true, color: '#d71a3a', textColor: '#ffffff'}
	      //periods['2019-05-20'] = {startingDay: true, color: '#d71a3a', textColor: '#ffffff'}

    return (
      <View style={styles.container}>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#263c91', '#6f82c6', '#d71a3a']} style={{height: 80,}}>
          <View style={{height: 24,}}>
            <StatusBar barStyle = "light-content" hidden = {false} backgroundColor={'transparent'} translucent = {true}/>
          </View>

          <View style={{height: 56, flexDirection: 'row',}}>
            <View style={{alignItems: 'center', justifyContent: 'center',}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Dash')}>
                <Icon name="arrow-back" style={{paddingLeft: 15, paddingRight: 45, color: '#ffffff'}} size={30} />
              </TouchableOpacity>
            </View>

            <View style={{alignItems:  'center', justifyContent: 'center',}}>
              <Text style={{textAlign: 'center', color: '#ffffff', fontSize: 20 }}>Period Calculator</Text>
            </View>

          </View>
        </LinearGradient>

        <View style={{flex:1,}}>

          <View style={{borderBottomColor: '#6f82c6', borderBottomWidth: 2, marginVertical: 10, }}>
            <View style={{flexDirection: 'row', paddingHorizontal: 10, justifyContent: 'space-between',}}>
              <View style={{alignItems: 'flex-start', justifyContent: 'flex-end',}}>
                <Text style={{textAlign: 'center', color: '#d71a3a', fontSize: 18,}}>{moment().format("ddd - MMM - YYYY")}</Text>
              </View>

              <View style={{alignItems: 'flex-end', justifyContent: 'flex-end',}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Edit')} style={{backgroundColor: '#6f82c6', borderRadius: 4,}}>
                  <Text style={{textAlign: 'center', paddingHorizontal: 15, paddingVertical: 12, color: '#ffffff', fontSize: 14,}}>Edit Preferences</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{flex: 1, paddingHorizontal: 10,}}>
            <Calendar
              // Initially visible month. Default = Date()
              current={new Date()}
              // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
              minDate={'1888-01-01'}
              // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
              maxDate={'2025-09-20'}
              // Handler which gets executed on day press. Default = undefined
              onDayPress={(day) => {}}
              // Handler which gets executed on day long press. Default = undefined
              onDayLongPress={(day) => {}}
              // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
              monthFormat={'dd / MMM / yyyy'}
              // Handler which gets executed when visible month changes in calendar. Default = undefined
              //onMonthChange={(month) => this.monthChange(month)}
              // Hide month navigation arrows. Default = false
              hideArrows={false}
              // Replace default arrows with custom ones (direction can be 'left' or 'right')
              renderArrowLeft={(direction) => (<Icon name="arrow-left" style={{paddingLeft: 15, paddingRight: 15, color: '#6f82c6'}} size={50} />)}
              //renderArrow={(right) => (<Icon name="arrow-forward" style={{paddingLeft: 15, paddingRight: 25, color: '#6f82c6'}} size={30} />)}
              // Do not show days of other months in month page. Default = false
              hideExtraDays={true}
              // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
              // day from another month that is visible in calendar page. Default = false
              disableMonthChange={true}
              // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
              firstDay={1}
              // Hide day names. Default = false
              hideDayNames={false}
              // Show week numbers to the left. Default = false
              showWeekNumbers={false}
              // Handler which gets executed when press arrow icon left. It receive a callback can go back month
              onPressArrowLeft={substractMonth => substractMonth()}
              // Handler which

              //gets executed when press arrow icon left. It receive a callback can go next month
              onPressArrowRight={addMonth => addMonth()}

              //Extras
              horizontal={true}
              // Enable paging on horizontal, default = false
              pagingEnabled={true}
              // Set custom calendarWidth.
              calendarWidth={320}

              markedDates={this.periods}
              // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
              markingType={'period'}


              // Specify theme properties to override specific styles for calendar parts. Default = {}
              theme={{
                backgroundColor: '#ffffff',
                calendarBackground: '#ffffff',
                textSectionTitleColor: '#6f82c6',
                selectedDayBackgroundColor: '#6f82c6',
                selectedDayTextColor: '#ffffff',
                todayTextColor: '#263c91',
                dayTextColor: '#2d4150',
                textDisabledColor: '#d9e1e8',
                dotColor: '#00adf5',
                selectedDotColor: '#ffffff',
                arrowColor: '#6f82c6',
                monthTextColor: '#6f82c6',
                textDayFontFamily: 'monospace',
                textMonthFontFamily: 'monospace',
                textDayHeaderFontFamily: 'monospace',
                textMonthFontWeight: 'bold',
                textDayFontSize: 16,
                textMonthFontSize: 16,
                textDayHeaderFontSize: 16
              }}

          />
          </View>

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
    borderTopColor: '#6f82c6',
    borderTopWidth: 2,
  },
});
