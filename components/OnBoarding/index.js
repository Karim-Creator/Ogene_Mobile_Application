import { Container } from 'native-base';
import React from 'react';
import { View, StyleSheet, Image, StatusBar, Text } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

export default function OnBoarding({ navigation }) {

          return (
              <Container style={{backgroundColor:'#000'}}>
                  <StatusBar barStyle="light-content" backgroundColor="#000"/>

                  <View style={{width: '100%', justifyContent:'center', alignItems:'center', top: 40}}>
                  <Text style={{fontSize: 40,fontFamily: 'Roboto_italic', color: 'yellow'}}>O<Text style={{color:'#fff', fontSize: 40}}>gene</Text></Text>
                  </View>

                <View style={{position: 'absolute',bottom: 0,right: 0, left: 0, top: 30}}>

                  <Onboarding
                  pages={[
                      {
                      image: <Image source={require('../../assets/Images/OnBoarding/vitamin.png')} style={{height: 250,width: '100%', resizeMode:'contain'}}/>,
                      title: 'Complements',
                      subtitle: 'Vitamins comes from food in small quantities, that is when complements come in handy.',
                      titleStyles: styles.titleStyles,
                      subTitleStyles: styles.subTitleStyles,
                      color: 'blue',
                      },
                      {
                      image: <Image source={require('../../assets/Images/OnBoarding/energy.png')} style={{height: 300, width: '100%', resizeMode:'contain' }}/>,
                      title: 'Energy Boost',
                      subtitle: 'Caffeine & Creatine help you bump your energy and achieve great results at the gym',
                      titleStyles: styles.titleStyles,
                      subTitleStyles: styles.subTitleStyles,
                      },
                      {
                      image: <Image source={require('../../assets/Images/OnBoarding/bar.png')} style={{height: 300, width: '100%', resizeMode:'contain' }}/>,
                      title: 'Healthy Snacks',
                      subtitle: 'Our bars are healthy, filled with protein, 0% sugar, no added fat & comes with different flavors.',
                      titleStyles: styles.titleStyles,
                      subTitleStyles: styles.subTitleStyles,
                      },
                      {
                      image: <Image source={require('../../assets/Images/OnBoarding/protein.png')} style={{height: 300, width: '100%', resizeMode:'contain' }}/>,
                      title: 'Protein Powders',
                      subtitle: 'Animal or plant Based protein powder will help you with your performance and build your ideal body.',
                      titleStyles: styles.titleStyles,
                      subTitleStyles: styles.subTitleStyles,
                      },
                  ]}
                  bottomBarColor={'#000'}
                  skipToPage={3}
                  onDone={() => navigation.navigate('Home')}
                  />
                </View>
                  
              </Container>
          );
        }

const styles = StyleSheet.create({
    titleStyles:{
        color: '#FFF010', 
        fontFamily:'Roboto_italic',
        fontSize: 35
    },

    subTitleStyles:{
        color: '#fff', 
        fontFamily:'Roboto_italic',
        textTransform:'capitalize', 
        fontSize: 23, 
        paddingLeft: 10, 
        paddingRight: 10
    },
})
