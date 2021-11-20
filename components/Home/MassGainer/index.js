import { Container } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';

//Card Data
const DATA = [
    {
      id: '1',
      img: require('../../../assets/Images/Home/MassGainer/serious.jpg'),
      product: require('../../../assets/Images/Details/MassGainer/serious.png'),
      title: 'Serious Mass',
      description: 'SERIOUS MASS is the ultimate muscle building and weight gain formula. With 1,250 calories per 2-scoop serving and 50 grams of protein, this powder makes the ideal post-workout and between meals shake for sizing up your goals. ',
      company: 'Optimum Nutrition',
      flavor: 'Chocolate',
      price: '650',
      weight: '5.4 kg',
      ratings: '4.2',
    },
  
    {
      id: '2',
      img: require('../../../assets/Images/Home/MassGainer/masstech.jpg'),
      product: require('../../../assets/Images/Details/MassGainer/tech.png'),
      title: 'Mass Tech',
      description: 'Mass Tech is an advanced muscle mass gainer designed for any individual that has a tough time adding size, is in their bulking phase or wants to break through their strength plateaus. Enhanced with 80 grams of protein and 1170 mass-producing calories ',
      company: 'Muscle Tech',
      flavor: 'Peanut Butter Chocolate',
      price: '600',
      weight: '2.3 kg',
      ratings: '4.4',
    },
  
    {
      id: '3',
      img: require('../../../assets/Images/Home/MassGainer/supermass.jpg'),
      product: require('../../../assets/Images/Details/MassGainer/super.jpg'),
      title: 'Super Mass Gainer',
      description: 'Super Mass Gainer is a powerhouse combination of 10.7 grams of BCAAs with 5.1 grams of Leucine. Super Mass Gainer also has a blend of vitamins and minerals to aid in balanced nutrition.',
      company: 'Dymatize',
      flavor: 'Strawberry',
      price: '650',
      weight: '2.8 kg',
      ratings: '4.3',
    },
  
    {
      id: '4',
      img: require('../../../assets/Images/Home/MassGainer/truemass.jpg'),
      product: require('../../../assets/Images/Details/MassGainer/true.png'),
      title: 'True Mass',
      description: 'True Mass is an advanced muscle mass gainer designed for any individual that has a tough time adding size, is in their bulking phase or wants to break through their strength plateaus. Enhanced with 80 grams of protein and 1170 mass-producing calories',
      company: 'BSN',
      flavor: 'Strawberry',
      price: '650',
      weight: '2.6 kg',
      ratings: '4.0',
    },
  
    {
      id: '5',
      img: require('../../../assets/Images/Home/MassGainer/jumbo.png'),
      product: require('../../../assets/Images/Details/MassGainer/jumbo.jpg'),
      title: 'Jumbo',
      description: 'JUMBO was developed to help those with very fast metabolisms, or people with extreme energy demands due to their activity levels. The nutrient ratios reflect these purposes. ',
      company: 'SciTec Nutrition',
      flavor: 'Chococlate Chips',
      price: '700',
      weight: '3.2 kg',
      ratings: '4.2',
    },
  
  ];

  const MassGainer = ({ navigation  }) => {
    const renderItem = ({ item }) => (
      <Item title={item.title} />
    );
  
    return (
        <Container style={{backgroundColor:'#FFF010'}}>
        
        <View style={{justifyContent:'center', alignItems:'center', backgroundColor:'#000'}}>
        <Text style={styles.titleStyles}>Mass Gainers</Text>
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
  
export default MassGainer;
  
