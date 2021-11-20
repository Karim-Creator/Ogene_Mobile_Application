import { Container } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import HomeHeader from '../components/Home/HomeHeader';
import MassGainer from '../components/Home/MassGainer';

export default class MassGainerScreen extends Component {
    render()
    {
        return (
          <Container>
            <HomeHeader navigation={this.props.navigation}/>
            <MassGainer navigation={this.props.navigation}/>
          </Container>
    );
  }
}

const styles = StyleSheet.create({
});
