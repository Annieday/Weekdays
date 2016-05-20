
// Import code we need 
import Moment from 'moment';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import DayItem from './src/day-item';//composition of components


// Create a react component
var Weekdays = React.createClass({//class Weekdays extends Component {  render()
    render: function () {
        return (
            <View style={styles.container}>
                    {this.days()}
            </View>
        );
    },
        //can only be used when list is short.
    days: function () {
        var daysItems=[];
        // days = DAYS.map(function(day){})  --run 7 times one for each day 
        //of the week
        for(var i = 0; i < 7; i++) {
            var day = Moment().add(i, 'days').format('dddd');
            daysItems.push(
                <DayItem day={day} daysUntil={i} key={i}/>
            )
        }
        
        return daysItems;
    },  
});

// Style the React component
var styles = StyleSheet.create({
    container: {
        flex: 1,
       // flexDirection: 'column', //defaut column
        justifyContent: 'center',//horizontal-col vertical-row
        alignItems: 'center',//vertical-col horizontal-row
    },
    textStyle: {
        
    },
});


// Show the react component on the screen 'weekdays'-project name
AppRegistry.registerComponent('weekdays', function() {
   return Weekdays; 
});


///**
// * Sample React Native App
// * https://github.com/facebook/react-native
// */
//'use strict';
//import React, {
//  AppRegistry,
//  Component,
//  StyleSheet,
//  Text,
//  View
//} from 'react-native';
//
//class weekdays extends Component {
//  render() {
//    return (
