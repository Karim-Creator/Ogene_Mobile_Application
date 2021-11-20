import { Container } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import AminoAcids from '../components/Home/AminoAcids';
import HomeHeader from '../components/Home/HomeHeader';

export default class AminoAcidsScreen extends Component {
    render()
    {
        return (
          <Container>
            <HomeHeader navigation={this.props.navigation}/>
            <AminoAcids navigation={this.props.navigation}/>
          </Container>
    );
  }
}

const styles = StyleSheet.create({
});
