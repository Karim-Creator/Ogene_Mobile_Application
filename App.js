import React from 'react';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { createStackNavigator} from '@react-navigation/stack';
import * as Font from 'expo-font';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './screens/home';
import SplashScreen from './screens/splash';
import SignupScreen from './screens/signup';
import SigninScreen from './screens/signin';
import OnBoarding from './components/OnBoarding';
import AnimalProteinScreen from './screens/animalprotein';
import MassGainerScreen from './screens/massgainer';
import PlantProteinScreen from './screens/plantprotein';
import ShakersScreen from './screens/shakers';
import EquipementScreen from './screens/equipement';
import AminoAcidsScreen from './screens/aminoacids';
import EnduranceScreen from './screens/endurance';
import EnergyBoostScreen from './screens/energyboost';
import { DrawerContent } from './screens/drawer'
import ReviewDetailsScreen from './screens/reviewDetails';
import CartScreen from './screens/cart';


//Firebase Api Key
//Initialize/Link To Firebase Server
const firebaseConfig = {
  apiKey: "AIzaSyD6p75zEzv8e6pf86itHifC7eqUDHp-Cis",
  authDomain: "ogene-e34b3.firebaseapp.com",
  projectId: "ogene-e34b3",
  storageBucket: "ogene-e34b3.appspot.com",
  messagingSenderId: "1083251196820",
  appId: "1:1083251196820:web:a78c549d079cffb3d5c581"
};
//Stops The App From Initilizing Everytime It Is Reloaded
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

//Create Drawer To Navigate Through Screens & Open/Close Drawer
const Drawer = createDrawerNavigator();
//Create Stack NAvigator
const Stack = createStackNavigator();

//Fade Animation Between Screens
const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
    shadowOpacity: 0,
  },
});


export default class App extends React.Component {



  constructor(props) {
    super(props);

    this.state = {
      //Set The Timer To False
      timePassed: false,
      //Set Fonts To False
      fontLoaded: true,
      //Set Logged In To False
      isLoggedIn: false,

    };
  }

  async componentDidMount() {
    //Set A Timer For SplashScreen
    setTimeout(() => {
      this.setTimePassed();
    }, 2000);
  }

  setTimePassed() {
    this.setState({ timePassed: true });
  }


  //Use The "Unsafe" ComponentWillMount To Add Fonts && "Unsafe" To Avoid a Warning
  async UNSAFE_componentWillMount() {
    //Load Fonts Using LoadAsync
    await Font.loadAsync({
      "Roboto_medium": require('./assets/Fonts/Roboto-Medium.ttf'),
      "Roboto_regular": require('./assets/Fonts/Roboto-Regular.ttf'),
      "Roboto_bold": require('./assets/Fonts/Roboto-Bold.ttf'),
      "Roboto_italic": require('./assets/Fonts/Roboto-Italic.ttf'),
    });
    this.setState({ fontLoaded: false });

    //Check If The User Is Logged In
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ isLoggedIn: true })
      } else {
        this.setState({ isLoggedIn: false })
      }
    })
  }



  render() {
    //User Log Out Function
    const logout = () => {
      firebase.auth().signOut().then(function () {
        console.log("Logged Out")
      })
        .catch(error => console.log(error))
    }

    //Go To Splash Screen When Loading
    if (!this.state.timePassed) {
      return (
        <SplashScreen />
      );
    }

    else {
      return (
        //DarkTheme To Avoid White Blink When Navigating
        <NavigationContainer theme={DarkTheme}>
          {/* If The User Is Logged In Return These Screens */}
          { this.state.isLoggedIn ?
            (<Drawer.Navigator mode="modal"
              // Active item color
              drawerContentOptions={{ activeBackgroundColor: '#FFF010', activeTintColor: '#000' }}
              drawerContent={props => {
                return (

                <DrawerContentScrollView {...props} style={{backgroundColor:'#000'}}>
                  <DrawerContent {...props} />
                </DrawerContentScrollView>

                )
              }}
              screenOptions={{
                // Hide Header
                headerShown: false,
                //Background Color Between Screens
                cardOverlay: () => (
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: '#000',
                    }}
                  />)
              }}
            >
              {/* Navigate To  On Boarding Screen*/}
              <Drawer.Screen
                name="Boarding"
                component={OnBoarding}
              />

              {/* Navigate To  Home Screen*/}
              <Drawer.Screen
                name="Home"
                component={HomeScreen}
              />

              {/* Navigate To  Home Screen*/}
              <Drawer.Screen
                name="Cart"
                component={CartScreen}
              />

              {/* Navigate To  Animal Protein Screen*/}
              <Drawer.Screen
                name="Animal"
                component={AnimalProteinScreen}
              />

              {/* Navigate To  Mass Gainer Screen*/}
              <Drawer.Screen
                name="Mass"
                component={MassGainerScreen}
              />

              {/* Navigate To  Plant Protein Screen*/}
              <Drawer.Screen
                name="Plant"
                component={PlantProteinScreen}
              />

              {/* Navigate To  Shakers Screen*/}
              <Drawer.Screen
                name="Shakers"
                component={ShakersScreen}
              />

              {/* Navigate To  Equipement Screen*/}
              <Drawer.Screen
                name="Equipement"
                component={EquipementScreen}
              />

              {/* Navigate To  Amino Acids Screen*/}
              <Drawer.Screen
                name="Amino"
                component={AminoAcidsScreen}
              />

              {/* Navigate To  Endurance Screen*/}
              <Drawer.Screen
                name="Endurance"
                component={EnduranceScreen}
              />

              {/* Navigate To  EnergyBoost Screen*/}
              <Drawer.Screen
                name="Energy"
                component={EnergyBoostScreen}
              />

              {/* Navigate To  Review Details Screen*/}
              <Drawer.Screen
                name="Details"
                component={ReviewDetailsScreen}
              />

            </Drawer.Navigator>
            )
            // If The User iS Not Logged In Return These Screens
            :
            (
              <Stack.Navigator
                screenOptions={{
                  headerShown: false,
                  cardStyle: {
                    backgroundColor: '#FFF010',
                    opacity: 1,
                  },
                }}
                //Remove The Flickering White Background When Switching Screens
                detachInactiveScreens={false} screenOptions={{ animationEnabled: false }}
                //Hide The Header
                headerMode={false}
              >
                <Stack.Screen name="Signin" component={SigninScreen} />
                <Stack.Screen name="Signup" component={SignupScreen} />
                {/* Navigate To  OnBoarding Screen*/}
              </Stack.Navigator>
            )}
        </NavigationContainer>
      );
    }
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
