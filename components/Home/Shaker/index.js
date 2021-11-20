import { Container } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';

//Card Data
const DATA = [
    {
      id: '1',
      img: require('../../../assets/Images/Home/Shakers/alpha.jpg'),
      product: require('../../../assets/Images/Details/Shakers/alpha.png'),
      title: 'Alpha Shakers',
      description: 'The Alpha Bottle features a silicone seal which ensures the Alpha Bottle is 100% leak-proof, combined with a rounded internal base which prevents powders from sticking, also making the Alpha Bottle easy to clean. ',
      company: 'Alpha',
      flavor: 'Dark',
      price: '120',
      weight: '1000 ml',
      ratings: '4.2',
    },
  
    {
      id: '2',
      img: require('../../../assets/Images/Home/Shakers/metal.jpg'),
      product: require('../../../assets/Images/Details/Shakers/blender.png'),
      title: 'Blender Shakers',
      description: 'The Alpha Bottle features a silicone seal which ensures the Alpha Bottle is 100% leak-proof, combined with a rounded internal base which prevents powders from sticking, also making the Alpha Bottle easy to clean. ',
      company: 'Blender',
      flavor: 'Dark',
      price: '100',
      weight: '1000 ml',
      ratings: '4.5',
    },
  
    {
      id: '3',
      img: require('../../../assets/Images/Home/Shakers/blender.jpg'),
      product: require('../../../assets/Images/Details/Shakers/cyclone.png'),
      title: 'Mixer Shaker',
      description: 'The Cyclone Mixer features a silicone seal which ensures the Alpha Bottle is 100% leak-proof, combined with a rounded internal base which prevents powders from sticking, also making the Cyclone Mixer easy to clean. ',
      company: 'Cyclone',
      flavor: 'Yellow',
      price: '200',
      weight: '1250 ml',
      ratings: '4.4',
    },
  
  ];

  const Shakers = ({ navigation  }) => {
    const renderItem = ({ item }) => (
      <Item title={item.title} />
    );
  
    return (
        <Container style={{backgroundColor:'#FFF010'}}>
        
        <View style={{justifyContent:'center', alignItems:'center', backgroundColor:'#000'}}>
        <Text style={styles.titleStyles}>Shakers</Text>
        </View>

        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          renderItem={ ({ item, index }) => {
              return(
              <View style={{height: 200, margin: 10,borderRadius: 15}}>
  
              {/* Image Section */}
              <TouchableOpacity
              onPress={() => navigation.navigate('Details', 
              { Title: item.title, image: item.img, Product: item.product, Weight: item.weight, Price: item.price, Company: item.company, Ratings: item.ratings, Flavor: item.flavor, Description: item.description}
              )}
              >
  
              <Image 
                source={item.img} // Use item to set the image source
                key={index} // Important to set a key for list items
                style={{
                  width:'100%',
                  height:200,
                  resizeMode:'cover',
                  borderRadius: 20,
                }}
              />
              </TouchableOpacity>
  
              </View>
              )
            }}
        />
    </Container>
        
    );
  }
  
  const styles = StyleSheet.create({
    titleStyles:{
        color: '#FFF010',
        fontSize: 30,
        fontFamily: 'Roboto_italic',
    },
  });
  
export default Shakers;
  
