import { Container } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';

//Card Data
const DATA = [
    {
      id: '1',
      img: require('../../../assets/Images/Home/EnergyBoost/c4.jpg'),
      product: require('../../../assets/Images/Details/EnergyBoost/c4.png'),
      title: 'C4 Pre Workout',
      description: ' C4 Original lives up to its solid reputation with a classic formula for advanced energy, endurance, focus and pumps! But with a new bottle design and more delicious flavor options for you to choose from.',
      company: 'Cellucor',
      flavor: 'Lemon Burst',
      price: '300',
      weight: '30 Serving',
      ratings: '4.4',
    },
  
    {
      id: '2',
      img: require('../../../assets/Images/Home/EnergyBoost/amino.png'),
      product: require('../../../assets/Images/Details/EnergyBoost/amino.jpg'),
      title: 'Amino Energy',
      description: 'Mix up ESSENTIAL AMIN.O. ENERGY anytime you want a boost of energy, focus and muscle recovery support. Each serving provides 100 mg of caffeine from natural sources to support energy and focus along with 5 grams of amino acids for muscle support.',
      company: 'Optimum Nutrition',
      flavor: 'Strawberry',
      price: '330',
      weight: '320 g',
      ratings: '4.3',
    },
  
    {
      id: '3',
      img: require('../../../assets/Images/Home/EnergyBoost/curse.jpg'),
      product: require('../../../assets/Images/Details/EnergyBoost/curse.png'),
      title: 'The Curse',
      description: 'When The Curse! kicks in, nothing will stand in your way. Insane energy, savage strength, huge muscle pumps and tunnel vision mental focus.* The Curse! pushes you past the limits of normal human endurance and leaves you screaming for more.',
      company: 'JXN Sports',
      flavor: 'Blue Raspberry',
      price: '350',
      weight: '50 Serving',
      ratings: '4.1',
    },

    {
      id: '4',
      img: require('../../../assets/Images/Home/EnergyBoost/kaged.jpg'),
      product: require('../../../assets/Images/Details/EnergyBoost/kaged.png'),
      title: 'Pre Kaged',
      description: 'Pre-Kaged is the Ultimate Pre-Workout to provide the best focus, pump, and stamina in the gym. Full label disclosure combined with premium, patented ingredients to crush your next workout!',
      company: 'Kaged Muscle',
      flavor: 'Mango Lime',
      price: '400',
      weight: '20 Serving',
      ratings: '4.2',
    },
  ];

  const EnergyBoost = ({ navigation  }) => {
    const renderItem = ({ item }) => (
      <Item title={item.title} />
    );
  
    return (
        <Container style={{backgroundColor:'#FFF010'}}>
        
        <View style={{justifyContent:'center', alignItems:'center', backgroundColor:'#000'}}>
        <Text style={styles.titleStyles}>Energy Boost</Text>
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
  
export default EnergyBoost;
  
