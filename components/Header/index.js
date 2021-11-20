import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, SafeAreaView } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';

export default class HeaderBar extends Component {
  render() {

    return (
      <View>
        <SafeAreaView>
        <Header style={styles.headerStyles}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
          <Left style={{flex: 1,}}>
            <Button transparent
            onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name='menu' style={{fontSize: 30}}/>
            </Button>
          </Left>
          <Body>
            <Title style={styles.titleStyles}>O<Text style={{color:'#fff', fontSize: 30}}>gene</Text></Title>
          </Body>
          <Right>
            <Button transparent
            onPress={() => this.props.navigation.navigate('Cart')}
            >
              <Icon name='cart' style={{fontSize: 30}}/>
            </Button>
          </Right>
        </Header>
        </SafeAreaView>
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