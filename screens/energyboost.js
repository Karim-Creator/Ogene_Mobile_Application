import { Container } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import EnergyBoost from '../components/Home/EnergyBoost';
import HomeHeader from '../components/Home/HomeHeader';

export default class EnergyBoostScreen extends Component {
    render()
    {
        return (
          <Container>
            <HomeHeader navigation={this.props.navigation}/>
            <EnergyBoost navigation={this.props.navigation}/>
          </Container>
    );
  }
}

const styles = StyleSheet.create({
});
