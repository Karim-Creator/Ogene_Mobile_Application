import { Button, Icon } from 'native-base';
import React from 'react';
import { View, Text, ImageBackground, StatusBar } from 'react-native';


export default function ReviewDetailsScreen ({ route, navigation }){
    const { Title, Company, Product, Ratings, Price, Flavor, Description, Weight } = route.params;
    return(
        <View>

            {/* Make Statusbar Transparent */}
            <StatusBar translucent backgroundColor="transparent"/>
        
            {/* Back Ground Image */}
            <ImageBackground imageStyle={{borderBottomLeftRadius: 20,borderBottomRightRadius: 20}} resizeMode={'contain'} style={{width: '100%', height: 280,marginTop: 10}} source={JSON.stringify(Product)}>
                    <Icon name="chevron-back" style={{color:'#FFF010',fontSize: 50,paddingTop: 25,paddingLeft: 5}}
                    onPress={() => navigation.goBack()}
                    />
            </ImageBackground>

            {/* Item Title */}
            <Text style={{color:'#FFF010',fontSize: 35,fontFamily:'Roboto_italic', paddingLeft: 10,marginTop: 10, textAlign:'center'}}>{Title}</Text>

            {/* Company & Ratings */}
            <View style={{flexDirection:'row',justifyContent:'space-between',padding: 10}}>
                <Text style={{color:'#FFF010',fontSize: 20,fontFamily:'Roboto_italic', paddingLeft: 10}}>{Company}</Text>
                <Icon name="star" style={{color:'#FFF010',fontSize: 20}}>
                <Text style={{color:'#FFF010',fontSize: 20,fontFamily:'Roboto_italic', paddingLeft: 10}}>{Ratings}</Text>
                </Icon>
            </View>

            {/* Description */}
            <Text style={{color:'#FFF',fontSize: 20,fontFamily:'Roboto_italic', padding: 20, textAlign:'left'}}>{Description}</Text>

            {/* Flavor & Weight */}
            <View style={{flexDirection:'row', justifyContent:'space-between',  paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10}}>
                <Text style={{color:'#FFF',fontSize: 20,fontFamily:'Roboto_italic', textAlign:'left'}}><Text style={{color:'#FFF010'}}>Flavor: </Text>{Flavor}</Text>
                <Text style={{color:'#FFF010',fontSize: 20,fontFamily:'Roboto_italic'}}>{Weight}</Text>
            </View>

            {/* Price & Add Item */}
            <View style={{justifyContent:'space-between',flexDirection:'row', padding: 20}}>
                <View style={{flexDirection:'row'}}>
                    <Icon name="remove-outline" style={{backgroundColor:'#FFF010',fontSize: 35, borderRadius: 10, color:'#000'}}/>
                    <Text style={{color:'#FFF',fontSize: 25, paddingLeft: 10, paddingRight: 10, textAlign:'center',marginRight: 5, marginLeft: 5}}>1</Text>
                    <Icon name="add-outline" style={{backgroundColor:'#FFF010',fontSize: 35, borderRadius: 10, color:'#000'}}/>
                </View>
                <View>
                <Text style={{color:'#FFF',fontSize: 20,fontWeight: 'bold', paddingLeft: 10, textAlign:'center'}}>{Price} DH</Text>
                </View>
            </View>
            
            {/* Add Item Button */}
            <Button style={{borderRadius: 20,padding: 10,marginTop: 20,marginBottom: 20,alignSelf: 'center',justifyContent:'center',height: 50, width: 350,backgroundColor:'#FFF010'}}>
                <Text style={{color: '#000',marginTop: 5,fontFamily: 'Roboto_italic', fontSize: 25,textAlign: 'center',alignSelf:'center'}}>
                    Add
                </Text>
            </Button>
        </View>
    )
}