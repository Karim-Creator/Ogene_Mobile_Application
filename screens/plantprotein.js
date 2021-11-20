import { Container } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import HomeHeader from '../components/Home/HomeHeader';
import PlantProtein from '../components/Home/PlantProtein';

export default class PlantProteinScreen extends Component {
    render()
    {
        return (
          <Container>
            <HomeHeader navigation={this.props.navigation}/>
            <PlantProtein navigation={this.props.navigation}/>
          </Container>
    );
  }
}

const styles = StyleSheet.create({
});
