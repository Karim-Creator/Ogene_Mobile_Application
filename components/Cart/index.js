import { Button, Icon, Container } from 'native-base';
import React from 'react';
import { View, FlatList, StyleSheet, Text, Image } from 'react-native';


//Card Data
const DATA = [
  {
    id: 'd1',
    title: 'ISO Whey Protein',
    img: require('../../assets/Images/Details/AnimalProtein/bpi.png'),
    company: 'bpi Sports',
    flavor: 'Cookie & Cream',
    ratings: '4.5',
    weight: '2.2 kg',
    price: '650',
  },

  {
    id: 'd2',
    title: 'C4 Pre Workout',
    img: require('../../assets/Images/Details/EnergyBoost/c4.png'),
    company: 'Cellucor',
    flavor: 'Lemon Burst',
    ratings: '4.4',
    weight: '30 Serving',
    price: '300',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const CartCard = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (

    <Container style={styles.container}>       
      
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        renderItem={ ({ item, index }) => {
            return(
            <View style={{marginTop: 5,backgroundColor:'#000',margin: 10, borderRadius: 5}}>
            
            <View style={{flexDirection: 'row', borderRadius: 20}}>

            {/* Image Section */}
            <Image 
              source={item.img} // Use item to set the image source
              key={index} // Important to set a key for list items
              style={{
                width: 130,
                height:160,
                resizeMode:'cover',
                borderRadius: 30,
              }}
            />

            {/* Description Section */}
            <View style={{flexDirection: 'column',paddingLeft: 5}}>

                <View style={{flexDirection: 'row',marginTop: 10, marginBottom: 10}}>
                    <Text style={styles.title}>{item.title}</Text>
                </View>

                <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <Button disabled bordered style={{borderColor: '#838383',borderRadius: 10,borderWidth: 10,padding: 5,marginRight: 10}}><Text style={{color:'#fff',fontSize: 10}}>{item.flavor}</Text></Button>
                    <Button disabled bordered style={{borderColor: '#838383',borderRadius: 10,borderWidth: 10,padding: 5,marginRight: 10}}><Text style={{color:'#fff',fontSize: 10}}>{item.weight}</Text></Button>
                </View>

                <View style={{width: '100%', flexDirection:'row', justifyContent:'flex-start', marginBottom: 10}}>
                    <Text style={styles.descriptionTextStyles}>
                    Manufacture: <Text style={{color:'#FFF010'}}>{item.company}</Text>
                    </Text>
                </View>
                    <Text style={styles.descriptionTextStyles}>
                        Ratings: <Text style={{color:'#FFF010'}}>{item.ratings}<Icon name="star" style={{color:'#FFF010', fontSize: 12}}/></Text>
                    </Text>

                <View style={{flexDirection:'row', marginBottom: 10, marginTop: 10}}>
                    <Icon name="remove-outline" style={{backgroundColor:'#FFF010',fontSize: 20, borderRadius: 10, alignSelf: 'center', color:'#000'}}/>
                    <Text style={{color:'#fff',fontSize: 20, paddingLeft: 10, paddingRight: 10, textAlign:'center',marginRight: 5, marginLeft: 5}}>1</Text>
                    <Icon name="add-outline" style={{backgroundColor:'#FFF010',fontSize: 20, borderRadius: 10,alignSelf: 'center', color:'#000'}}/>
                </View>
            
            <View>
                <Text style={styles.descriptionTextStyles}>
                    Price: <Text style={{color:'#FFF010'}}>{item.price} DH</Text>
                </Text>
            </View>
                    
                </View>
            </View>

            {/* Line Between Items */}
            <View
                style={{
                    borderBottomColor: '#FFF010',
                    borderBottomWidth: 1,
                    marginTop: 10
                }}
            />
            </View>
            )
          }}
      />
      

        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{color:'#fff', fontSize: 25, fontFamily: 'Roboto_italic', paddingLeft: 20}}>Your Total: </Text>
            <Text style={{color:'#FFF010', fontSize: 25, fontFamily: 'Roboto_italic', paddingRight: 20}}>950 dh</Text>
        </View>

        <Button style={{borderRadius: 20, marginBottom: 50,  marginTop: 20, alignSelf: 'center',justifyContent:'center',height: 50, width: 250,backgroundColor:'#FFF010'}}>
                <Text style={{color: '#000',marginTop: 5,fontFamily: 'Roboto_italic', fontSize: 25,textAlign: 'center',alignSelf:'center'}}>
                    Purchase
                </Text>
        </Button>

      
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },

  title: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Roboto_italic',
    paddingTop: 5,
    marginRight: 10

  },

  descriptionTextStyles:{
    color: '#fff',
    marginTop: 5,
    fontSize: 15,
    fontFamily: 'Roboto_italic'
  }
});

export default CartCard;