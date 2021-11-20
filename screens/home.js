import { Container } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import HeaderBar from '../components/Header';
import HomeAccordion from '../components/Home/HomeAccordion';

export default class HomeScreen extends Component {
    render()
    {
        return (
          <Container>
            <HeaderBar navigation={this.props.navigation}/>
            <HomeAccordion navigation={this.props.navigation}/>
          </Container>
    );
  }
}

const styles = StyleSheet.create({
});
