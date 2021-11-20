import { StatusBar } from 'expo-status-bar';
import { Container, Item, Input, Icon, Button } from 'native-base';
import React, { Component, useRef, useEffect } from 'react';
import { Text, View, Animated, ImageBackground, Dimensions } from 'react-native';
import * as firebase from 'firebase';

const FadeInView = (props) => {

  // Fade Animation Start
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
  // Fade Animation End
}


export default class SignupScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }

  SignUp () {
    const {email, password, name} = this.state
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() =>{
      console.log("Account Added")
      this.props.navigation.navigate("Boarding")
    })
    .catch(error => console.log(error))
  };

  render() {
  
    return (
      <Container style={{backgroundColor:'#000'}}>
        <StatusBar translucent backgroundColor="transparent" style="light" />
        {/* Height And Width Dimension To Avoid Android Keyboard From Resizing Background Image */}
        <ImageBackground
          source={require('../assets/Images/image1.jpg')} resizeMode='cover' style={{ height: '100%', width: Dimensions.get('window').width }}>


          <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, alignItems: 'center' }}>

            <Text style={{ color: '#FFF010', fontFamily: 'Roboto_italic', fontSize: 45, justifyContent: 'center', top: 40 }}>O<Text style={{ color: '#fff' }}>gene</Text></Text>

          </View>

          <View style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, justifyContent: 'center', marginTop: 40}}>

          <FadeInView>

            <Text style={{color:'#fff',fontFamily: 'Roboto_bold',alignSelf:'center', fontSize: 35 ,paddingBottom: 30}}>Sign Up</Text>
            

            <Item rounded style={{ marginLeft: 20, marginRight: 20, marginBottom: 20, borderColor: '#fff' }}>
              <Icon active name='person-outline' style={{ color: '#fff' }} />
              <Input placeholder='Your Name' placeholderTextColor="#fff"  style={{color:'#fff'}}

              autoCorrect={false}
              autoCapitalize= "none"
              onChangeText={name => this.setState({ name })}
              value={this.state.name}
              
              />
            </Item>

            <Item rounded style={{ marginLeft: 20, marginRight: 20, marginBottom: 20, borderColor: '#fff' }}>
              <Icon active name='mail-outline' style={{ color: '#fff' }} />
              <Input placeholder='Your Email' placeholderTextColor="#fff" style={{color:'#fff'}}

              autoCorrect={false}
              autoCapitalize= "none"
              onChangeText={email => this.setState({ email })}
              value={this.state.email}


              />
            </Item>

            <Item rounded style={{ marginLeft: 20, marginRight: 20, borderColor: '#fff' }}>
              <Icon active name='lock-closed-outline' style={{ color: '#fff' }} />
              <Input placeholder='Your Password' placeholderTextColor="#fff" style={{color:'#fff'}}

              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={password => this.setState({ password })}
              value={this.state.password}



              />
            </Item>

            <Button style={{alignSelf:'center', marginTop: 30, borderRadius: 20, padding: 80, backgroundColor:'#cccc00'}}
            onPress={() => this.SignUp(this.state.name, this.state.email, this.state.password)}
            >
              <Text style={{color:'#fff', fontSize: 20, fontFamily:'Roboto_medium'}}>Create Account</Text>
            </Button>

            <Text style={{color:'#fff', alignSelf:'center', marginTop: 15}}>
              Already Have An Account ? 
            <Text style={{color:'#FFF010'}}
            onPress={() => this.props.navigation.navigate('Signin')}
            > Sign In</Text>
            </Text>
          </FadeInView>


          </View>

        </ImageBackground>
      </Container>
    );
  }
}