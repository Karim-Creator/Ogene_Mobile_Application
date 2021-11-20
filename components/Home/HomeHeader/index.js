import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Left, Body, Right, Button, Icon, Title, Text, Header } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

export default class HomeHeader extends Component {
  render() {

    return (
      
      <View style={{height: 80,flexDirection:'row', backgroundColor:'#000'}}>
        <ScrollView>
        <Header style={styles.headerStyles}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
          <Left style={{flex: 1,}}>
            <Button transparent
            onPress={() => this.props.navigation.goBack()}
            >
              <Icon name='chevron-back' style={{fontSize: 30, color:'yellow'}}/>
            </Button>
          </Left>
          <Body>
            <Title style={styles.titleStyles}>O<Text style={{color:'#fff', fontSize: 30}}>gene</Text></Title>
          </Body>
          <Right>
          </Right>
        </Header>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    titleStyles: {
        alignSelf:'center',
        fontSize: 30,
        fontFamily: 'Roboto_italic',
        color: 'yellow'
    },
    headerStyles:{
      //getStatusBarHeight Prevents Header From OverLapping On Status Bar
      paddingTop: getStatusBarHeight(),
      height: 54 + getStatusBarHeight(),
      backgroundColor:'#000',
    }
})