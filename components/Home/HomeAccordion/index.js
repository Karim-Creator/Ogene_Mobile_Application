import React, { Component } from "react";
import { Container, View } from "native-base";
import { TouchableOpacity, Text, Image, StyleSheet } from "react-native";

export default class HomeAccordion extends Component {
  render() {
    return (
      <Container style={{backgroundColor:'#FFF010'}}>

        {/* Top Navigation */}
        <View style={{flexDirection: 'row',justifyContent:'center', top: 135}}>
          <TouchableOpacity style={{backgroundColor:'#E8E8E8',alignItems: 'center',justifyContent: 'center', borderRadius: 55, width: 110, height: 110, marginRight: 3,elevation: 20}}
          onPress={() => this.props.navigation.navigate('Amino')}
          >
            <Image source={require('../../../assets/Images/Home/Accordion/amino.png')} style={{width: 60, height: 60, resizeMode:'contain'}}/>
            <Text style={styles.textStyles}>Amino Acids</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'#E8E8E8',alignItems: 'center',justifyContent: 'center', borderRadius: 55, width: 110, height: 110,elevation: 20}}
          onPress={() => this.props.navigation.navigate('Mass')}
          >
            <Image source={require('../../../assets/Images/Home/Accordion/gainer.png')} style={{width: 60, height: 60, resizeMode:'contain'}}/>
            <Text style={styles.textStyles}>Mass Gainer</Text>
          </TouchableOpacity>
        </View>

        {/* Left Navigation */}
        <View style={{flexDirection:'column', position: "absolute", top: 230, left: 10}}>
        <TouchableOpacity style={{backgroundColor:'#E8E8E8',alignItems: 'center',justifyContent: 'center', borderRadius: 55, width: 110, height: 110,elevation: 20}}
        onPress={() => this.props.navigation.navigate('Endurance')}
        >
          <Image source={require('../../../assets/Images/Home/Accordion/endurance.png')} style={{width: 60, height: 60, resizeMode:'contain'}}/>
            <Text style={styles.textStyles}>Endurance</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'#E8E8E8',alignItems: 'center',justifyContent: 'center',left: 20, borderRadius: 55, width: 110, height: 110,elevation: 20}}
          onPress={() => this.props.navigation.navigate('Plant')}
          >
            <Image source={require('../../../assets/Images/Home/Accordion/protein1.png')} style={{width: 60, height: 60, resizeMode:'contain'}}/>
            <Text style={styles.textStyles}>Plant Protein</Text>
          </TouchableOpacity>
        </View>

        {/* Right Navigation */}
        <View style={{flexDirection:'column',position: "absolute", top: 230, right: 10}}>
          <TouchableOpacity style={{backgroundColor:'#E8E8E8',alignItems: 'center',justifyContent: 'center', borderRadius: 55, width: 110, height: 110,elevation: 20}}
          onPress={() => this.props.navigation.navigate('Energy')}
          >
            <Image source={require('../../../assets/Images/Home/Accordion/energy.png')} style={{width: 60, height: 60, resizeMode:'contain'}}/>
            <Text style={styles.textStyles}>Energy Boost</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'#E8E8E8',alignItems: 'center',justifyContent: 'center',right: 20, borderRadius: 55, width: 110, height: 110,elevation: 20}}
          onPress={() => this.props.navigation.navigate('Shakers')}
          >
           <Image source={require('../../../assets/Images/Home/Accordion/shaker.png')} style={{width: 60, height: 60, resizeMode:'contain'}}/>
            <Text style={styles.textStyles}>Shakers</Text>
          </TouchableOpacity>
        </View>

        {/* Mid Navigation */}
        <View style={{flexDirection:'column',position: "absolute", top: 240, left: 120}}>
          <TouchableOpacity style={{backgroundColor:'#E8E8E8',alignItems: 'center',justifyContent: 'center', borderRadius: 75, width: 150, height: 150, elevation: 20}}
          onPress={() => this.props.navigation.navigate('Animal')}
          >
            <Image source={require('../../../assets/Images/Home/Accordion/protein.png')} style={{width: 80, height: 80, resizeMode:'contain'}}/>
            <Text style={styles.textStyles}>Animal Based</Text>
            <Text style={styles.textStyles}>Protein</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom navigation */}
        <View style={{flexDirection:'column',position: "absolute", top: 395, left: 140}}>
          <TouchableOpacity style={{backgroundColor:'#E8E8E8',alignItems: 'center',justifyContent: 'center', borderRadius: 55, width: 110, height: 110,elevation: 20}}
          onPress={() => this.props.navigation.navigate('Equipement')}
          >
            <Image source={require('../../../assets/Images/Home/Accordion/equipement.png')} style={{width: 60, height: 60, resizeMode:'contain'}}/>
            <Text style={styles.textStyles}>Equipement</Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  textStyles: {
    fontSize: 15,
    fontFamily: 'Roboto_italic',
    color: "#000", 
  }
});