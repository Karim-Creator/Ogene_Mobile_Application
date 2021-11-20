import { Container } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';

//Card Data
const DATA = [
    {
      id: '1',
      img: require('../../../assets/Images/Home/PlantProtein/kos.jpg'),
      product: require('../../../assets/Images/Details/PlantProtein/kos.png'),
      title: 'Organic Protein',
      description: 'Health is not a passive state, but an active one; a pursuit. At KOS we’ve formulated a plant-based protein whose combined ingredients cover all the amino acids.',
      company: 'KOS',
      flavor: 'Chocolate',
      price: '450',
      weight: '1.3 kg',
      ratings: '4.2',
    },
  
    {
      id: '2',
      img: require('../../../assets/Images/Home/PlantProtein/orgain.jpg'),
      product: require('../../../assets/Images/Details/PlantProtein/orgain.png'),
      title: 'Organic Protein',
      description: 'Our organic plant-based protein powder serves up 21g of vegan protein and only 150 calories in every serving. Fuel your body with clean, organic nutrition with a complete amino acid profile, no added sugar* and no artificial sweeteners.',
      company: 'Orgain',
      flavor: 'Chocolate & Coconut',
      price: '250',
      weight: '900 g',
      ratings: '4.5',
    },
  
    {
      id: '3',
      img: require('../../../assets/Images/Home/PlantProtein/naked.jpg'),
      product: require('../../../assets/Images/Details/PlantProtein/naked.png'),
      title: 'Pea Protein',
      description: 'This high quality protein powder features just one simple ingredient — vegetable pea protein isolate, Fermented’s Pea Protein is unflavored, unsweetened, and vegan.',
      company: 'Fermented',
      flavor: 'Pea & Greens',
      price: '250',
      weight: '500 g',
      ratings: '4.0',
    },
  
    {
      id: '4',
      img: require('../../../assets/Images/Home/PlantProtein/perform.jpg'),
      product: require('../../../assets/Images/Details/PlantProtein/vivo.png'),
      title: 'Perform Protein',
      description: 'A complete blend of plant protein, BCAAs,turmeric and digestive enzymes to help you trainharder and recover faster.',
      company: 'Vivo',
      flavor: 'Raw Cacoa',
      price: '340',
      weight: '990 g',
      ratings: '4.4',
    },
  
    {
      id: '5',
      img: require('../../../assets/Images/Home/PlantProtein/evolve.jpg'),
      product: require('../../../assets/Images/Details/PlantProtein/evolve.png'),
      title: 'Plant Protein Shake',
      description: 'with 20g of plant protein, 10g of fiber, and rich chocolateyness, our double chocolate flavored shake brings out your best side.',
      company: 'Evolve',
      flavor: 'Classic Chocolate',
      price: '150',
      weight: '330 ml',
      ratings: '4.3',
    },
  
  ];

  const PlantProtein = ({ navigation  }) => {
    const renderItem = ({ item }) => (
      <Item title={item.title} />
    );
  
    return (
        <Container style={{backgroundColor:'#FFF010'}}>
        
        <View style={{justifyContent:'center', alignItems:'center', backgroundColor:'#000'}}>
        <Text style={styles.titleStyles}>Plant Based Protein</Text>
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
  
export default PlantProtein;
  
