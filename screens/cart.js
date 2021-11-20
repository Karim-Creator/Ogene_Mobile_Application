import { Container, Text } from 'native-base';
import React, { Component } from 'react';
import { View } from 'react-native';
import CartCard from '../components/Cart';
import HomeHeader from '../components/Home/HomeHeader';


export default class CartScreen extends Component {
        render()
        {
          return (
            <Container>
              <HomeHeader navigation={this.props.navigation}/>
              <CartCard navigation={this.props.navigation}/>
            </Container>
          );
        }
}

