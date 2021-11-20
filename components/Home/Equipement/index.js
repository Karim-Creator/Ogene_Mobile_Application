import { Container } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';

//Card Data
const DATA = [
    {
      id: '1',
      img: require('../../../assets/Images/Home/Equipement/barbell.jpg'),
      product: require('../../../assets/Images/Details/Equipement/barbell.jpg'),
      title: 'Gym Barbell',
      description: 'Train your whole body, building your strength and conditioning, with upper and lower body exercises, then add more weight as you develop so you can enjoy a more intensive workout.',
      company: 'Cap',
      flavor: 'Iron',
      price: '500',
      weight: '60 kg',
      ratings: '4.2',
    },
  
    {
      id: '2',
      img: require('../../../assets/Images/Home/Equipement/dumbbell.jpg'),
      product: require('../../../assets/Images/Details/Equipement/dumbbell.jpg'),
      title: 'Gym Dumbbell',
      description: 'Train your whole body, building your strength and conditioning, with upper and lower body exercises, then add more weight as you develop so you can enjoy a more intensive workout.',
      company: 'IronFist',
      flavor: 'Iron',
      price: '250',
      weight: '30 kg',
      ratings: '4.1',
    },
  
    {
      id: '3',
      img: require('../../../assets/Images/Home/Equipement/bench.jpg'),
      product: require('../../../assets/Images/Details/Equipement/bench.jpg'),
      title: 'Gym Bench',
      description: 'Train your whole body, building your strength and conditioning, with upper and lower body exercises, then add more weight as you develop so you can enjoy a more intensive workout.',
      company: 'IronFist',
      flavor: 'Iron',
      price: '200',
      weight: '40 kg',
      ratings: '4.1',
    },
  
  ];

  const Equipement = ({ navigation  }) => {
    const renderItem = ({ item }) => (
      <Item title={item.title} />
    );
  
    return (
        <Container style={{backgroundColor:'#FFF010'}}>
        
        <View style={{justifyContent:'center', alignItems:'center', backgroundColor:'#000'}}>
        <Text style={styles.titleStyles}>Equipment</Text>
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
  
export default Equipement;
  
