import { Container } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';

//Card Data
const DATA = [
    {
      id: '1',
      img: require('../../../assets/Images/Home/Endurance/gfuel.jpg'),
      product: require('../../../assets/Images/Details/Endurance/gfuel.png'),
      title: 'Energy Formula',
      description: 'GRAPE G FUEL IS BACK! But this time around, it’s outta this world! It’s intergalactic! It’s...”GALAXY GRAPE”!!!  Experience the classic GRAPE taste today and take your taste buds on a journey through time and space space space space.',
      company: 'Gfuel',
      flavor: 'Grape',
      price: '350',
      weight: '40 Servings',
      ratings: '4.5',
    },
  
    {
      id: '2',
      img: require('../../../assets/Images/Home/Endurance/hmb.jpg'),
      product: require('../../../assets/Images/Details/Endurance/hmb.png'),
      title: 'Formula Caps',
      description: 'HMB Supports The Body to grow and strengthen naturaly, HMB has been shown clinically to increase muscle size, strength and improve fat burning in response to exercise.',
      company: 'Trec',
      flavor: 'Blue Berry',
      price: '220',
      weight: '180 Capsules',
      ratings: '4.1',
    },
  
    {
      id: '3',
      img: require('../../../assets/Images/Home/Endurance/bcaa.jpg'),
      product: require('../../../assets/Images/Details/Endurance/bcaa.png'),
      title: 'BCAA',
      description: 'The three BCAAs are leucine, isoleucine and valine. These three amino acids play a particularly important role in muscle growth by both stimulating protein synthesis and preventing protein catabolism.',
      company: 'NutraKey',
      flavor: 'Apple',
      price: '300',
      weight: '250 g',
      ratings: '4.5',
    },

    {
      id: '4',
      img: require('../../../assets/Images/Home/Endurance/vitamin.jpg'),
      product: require('../../../assets/Images/Details/Endurance/vitamins.png'),
      title: 'Multivitamins',
      description: 'Our Multivitamins Contains Different Types of vitamins that our body cannot make or absorb enough to suffice our need, that is where our product comes in handy and that is out goal.',
      company: 'PowerofNature',
      flavor: 'Greens',
      price: '150',
      weight: '100 Capsules',
      ratings: '4.0',
    },
  ];

  const Endurance = ({ navigation  }) => {
    const renderItem = ({ item }) => (
      <Item title={item.title} />
    );
  
    return (
        <Container style={{backgroundColor:'#FFF010'}}>
        
        <View style={{justifyContent:'center', alignItems:'center', backgroundColor:'#000'}}>
        <Text style={styles.titleStyles}>Endurance</Text>
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
  
export default Endurance;
  
