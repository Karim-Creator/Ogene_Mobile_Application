import { Container } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';

//Card Data
const DATA = [
    {
      id: '1',
      img: require('../../../assets/Images/Home/AminoAcids/bpi.jpg'),
      product: require('../../../assets/Images/Details/AminoAcids/bcaa.jpg'),
      title: 'Best BCAA',
      description: 'The three BCAAs are leucine, isoleucine and valine. These three amino acids play a particularly important role in muscle growth by both stimulating protein synthesis and preventing protein catabolism.',
      company: 'bpi Sports',
      flavor: 'Watermelon',
      price: '350',
      weight: '300 g',
      ratings: '4.5',
    },
  
    {
      id: '2',
      img: require('../../../assets/Images/Home/AminoAcids/amino.jpg'),
      product: require('../../../assets/Images/Details/AminoAcids/amino.jpg'),
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
      img: require('../../../assets/Images/Home/AminoAcids/carnitine.jpg'),
      product: require('../../../assets/Images/Details/AminoAcids/carnitine.png'),
      title: 'L-Carnitine',
      description: 'Xtreme combines caffeine from natural sources with creatine monohydrate and beta-alanine to help you unleash energy, focus, performance and endurance. Whether your goal is reach the pinnacle of your game.',
      company: 'Xtreme',
      flavor: 'Lemon',
      price: '450',
      weight: '500 g',
      ratings: '4.1',
    },

    {
      id: '4',
      img: require('../../../assets/Images/Home/AminoAcids/glutamine.jpg'),
      product: require('../../../assets/Images/Details/AminoAcids/glutamine.png'),
      title: 'Glutamine',
      description: 'L-glutamine is an amino acid that supports a healthy intestinal lining and immune function, and assists in healing after injury or surgery and in muscle cell repair.',
      company: 'Thorne',
      flavor: 'Apple',
      price: '200',
      weight: '250 g',
      ratings: '4.2',
    },
  ];

  const AminoAcids = ({ navigation  }) => {
    const renderItem = ({ item }) => (
      <Item title={item.title} />
    );
  
    return (
        <Container style={{backgroundColor:'#FFF010'}}>
        
        <View style={{justifyContent:'center', alignItems:'center', backgroundColor:'#000'}}>
        <Text style={styles.titleStyles}>Amino Acids</Text>
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
  
export default AminoAcids;
  
