import { Container } from 'native-base';
import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, FlatList, Text } from 'react-native';

//Card Data
const DATA = [
    {
      id: '1',
      img: require('../../../assets/Images/Home/AnimalProtein/gold.jpg'),
      product: require('../../../assets/Images/Details/AnimalProtein/whey.jpg'),
      title: 'Whey Protein',
      description: 'Each great tasting serving contains 24g of premium whey protein to support muscle growth and 5.5 g of naturally occurring BCAAs.',
      company: 'Optimum Nutrition',
      flavor: 'Chocolate Coockie',
      price: '600',
      weight: '2.7 kg',
      ratings: '4.5',
    },
  
    {
      id: '2',
      img: require('../../../assets/Images/Home/AnimalProtein/hydro.jpg'),
      product: require('../../../assets/Images/Details/AnimalProtein/hydro.png'),
      title: 'Hydro Protein',
      description: 'Isolates are the purest form of whey protein with no excess fat or lactose. Hydrolysing the isolates breaks the larger proteins down into smaller pieces for quicker absorption.',
      company: 'Optimum Nutrition',
      flavor: 'Dark Chocolate',
      price: '650',
      weight: '2.5 kg',
      ratings: '4.3',
    },
  
    {
      id: '3',
      img: require('../../../assets/Images/Home/AnimalProtein/combat.jpg'),
      product: require('../../../assets/Images/Details/AnimalProtein/combat.png'),
      title: 'Combat Whey Protein',
      description: 'Microfiltered Protein Blend (Whey Protein Concentrate, Whey Protein Isolate, Whey Protein Hydrolysate, Micellar Casein, Egg Albumin), Cocoa Bean Powder, Inulin.',
      company: 'Muscle Pharm',
      flavor: 'Chocolate Chips',
      price: '600',
      weight: '2.5 kg',
      ratings: '4.1',
    },
  
    {
      id: '4',
      img: require('../../../assets/Images/Home/AnimalProtein/hd.jpg'),
      product: require('../../../assets/Images/Details/AnimalProtein/bpi.png'),
      title: 'ISO Whey Protein',
      description: 'Pure Protein Blended With BCAA & Vitamins To Ensure Muscle Growth And Recovery, Each Scoop Consumed Contains 24g Protein That Is Easily Absorbed By Our Body.',
      company: 'bpi Sports',
      flavor: 'Cookie & Cream',
      price: '650',
      weight: '2.2 kg',
      ratings: '4.4',
    },
  
    {
      id: '5',
      img: require('../../../assets/Images/Home/AnimalProtein/nitro.jpg'),
      product: require('../../../assets/Images/Details/AnimalProtein/nitro.jpg'),
      title: 'Nitro Whey Protein',
      description: 'Nitro-Tech Performance is a whey protein that contains 30 grams of protein, especially whey isolate, ultra-filtered whey concentrate, and hydrolysed whey isolate. It has less than 1 g of carbohydrates and 1.5 g of fat. ',
      company: 'Muscle Tech',
      flavor: 'Lucuma Yogurt',
      price: '400',
      weight: '950 g',
      ratings: '4.5',
    },
  
  ];

  const AnimalProtein = ({ navigation  }) => {
    const renderItem = ({ item }) => (
      <Item title={item.title} />
    );
  
    return (
        
        <Container style={{backgroundColor:'#FFF010'}}>

        <View style={{justifyContent:'center', alignItems:'center', backgroundColor:'#000'}}>
        <Text style={styles.titleStyles}>Animal Based Protein</Text>
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
        color: '#FFF101',
        fontSize: 30,
        fontFamily: 'Roboto_italic',
    },
});
  
export default AnimalProtein;
  