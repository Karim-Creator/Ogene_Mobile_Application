import { Container } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import AnimalProtein from '../components/Home/AnimalProtein';
import HomeHeader from '../components/Home/HomeHeader';

export default class AnimalProteinScreen extends Component {
    render()
    {
        return (
          <Container>
            <HomeHeader navigation={this.props.navigation}/>
            <AnimalProtein navigation={this.props.navigation}/>
          </Container>
    );
  }
}

const styles = StyleSheet.create({

});
