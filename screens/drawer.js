import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Container, Icon, Thumbnail } from 'native-base';
import * as firebase from 'firebase';

//Logout Function
const signOut = () => {
    return firebase.auth().signOut()
        .then(() => {
            console.log("Logged Out!")
        })
        .catch(error => console.log(error))
}


export function DrawerContent(props) {

    //Get Current User Info
    const user = firebase.auth().currentUser;

    //Check If The User Is Logged In
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log('User email: ', user.email);
        }
        else {
            console.log('User Is Not Logged In!')
        }
    });
    return (

        <Container style={{ backgroundColor: '#000' }}>


            {/* Avatar & Name */}
            <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 40 }}>
                <Thumbnail large source={require('../assets/Images/Profile/avatar.jpg')} />
                {/* Display Current User Email */}
                <Text style={{ color: '#fff', fontSize: 25, fontFamily: 'Roboto_italic' }}>{user.email}</Text>
            </View>

            {/* Line Between */}
            <View
                style={{
                    borderBottomColor: '#FFF010',
                    borderBottomWidth: 1,
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 10
                }}
            />

            <ScrollView>
                {/* Orders */}
                <TouchableOpacity style={{ flexDirection: 'row', paddingLeft: 20, paddingTop: 30 }}
                    onPress={() => props.navigation.navigate("Animal")}
                >

                    <Image source={require('../assets/Images/Drawer/animal.png')} style={{ width: 30, height: 30 }} />
                    <Text style={{ color: '#fff', fontSize: 20, fontFamily: 'Roboto_italic', paddingLeft: 20 }}>Animal Protein</Text>
                </TouchableOpacity>

                {/* Payment Method */}
                <TouchableOpacity style={{ flexDirection: 'row', paddingLeft: 20, paddingTop: 30 }}
                    onPress={() => props.navigation.navigate("Plant")}
                >
                    <Image source={require('../assets/Images/Drawer/plant.png')} style={{ width: 30, height: 30 }} />
                    <Text style={{ color: '#fff', fontSize: 20, fontFamily: 'Roboto_italic', paddingLeft: 20 }}>Plant Protein</Text>
                </TouchableOpacity>

                {/* My Profile */}
                <TouchableOpacity style={{ flexDirection: 'row', paddingLeft: 20, paddingTop: 30 }}
                    onPress={() => props.navigation.navigate("Mass")}
                >
                    <Image source={require('../assets/Images/Drawer/mass.png')} style={{ width: 30, height: 30 }} />
                    <Text style={{ color: '#fff', fontSize: 20, fontFamily: 'Roboto_italic', paddingLeft: 20 }}>Mass Gainer</Text>
                </TouchableOpacity>

                {/* My Adresses */}
                <TouchableOpacity style={{ flexDirection: 'row', paddingLeft: 20, paddingTop: 30 }}
                    onPress={() => props.navigation.navigate("Amino")}
                >
                    <Image source={require('../assets/Images/Drawer/amino.png')} style={{ width: 30, height: 30 }} />
                    <Text style={{ color: '#fff', fontSize: 20, fontFamily: 'Roboto_italic', paddingLeft: 20 }}>Amino Acids</Text>
                </TouchableOpacity>

                {/* Help Center */}
                <TouchableOpacity style={{ flexDirection: 'row', paddingLeft: 20, paddingTop: 30 }}
                    onPress={() => props.navigation.navigate("Endurance")}
                >
                    <Image source={require('../assets/Images/Drawer/endurance.png')} style={{ width: 30, height: 30 }} />
                    <Text style={{ color: '#fff', fontSize: 20, fontFamily: 'Roboto_italic', paddingLeft: 20 }}>Endurance</Text>
                </TouchableOpacity>

                {/* Invite Friends */}
                <TouchableOpacity style={{ flexDirection: 'row', paddingLeft: 20, paddingTop: 30 }}
                    onPress={() => props.navigation.navigate("Energy")}
                >
                    <Image source={require('../assets/Images/Drawer/energy.png')} style={{ width: 30, height: 30 }} />
                    <Text style={{ color: '#fff', fontSize: 20, fontFamily: 'Roboto_italic', paddingLeft: 20 }}>Energy Boost</Text>
                </TouchableOpacity>

                {/* Invite Friends */}
                <TouchableOpacity style={{ flexDirection: 'row', paddingLeft: 20, paddingTop: 30 }}
                    onPress={() => props.navigation.navigate("Shakers")}
                >
                    <Image source={require('../assets/Images/Drawer/shaker.png')} style={{ width: 30, height: 30 }} />
                    <Text style={{ color: '#fff', fontSize: 20, fontFamily: 'Roboto_italic', paddingLeft: 20 }}>Shakers</Text>
                </TouchableOpacity>

                {/* Invite Friends */}
                <TouchableOpacity style={{ flexDirection: 'row', paddingLeft: 20, paddingTop: 30 }}
                    onPress={() => props.navigation.navigate("Equipement")}
                >
                    <Image source={require('../assets/Images/Drawer/equipement.png')} style={{ width: 30, height: 30 }} />
                    <Text style={{ color: '#fff', fontSize: 20, fontFamily: 'Roboto_italic', paddingLeft: 20 }}>Equipement</Text>
                </TouchableOpacity>

                {/* Line Between */}
                <View
                    style={{
                        borderBottomColor: '#FFF010',
                        borderBottomWidth: 1,
                        marginLeft: 10,
                        marginRight: 10,
                        marginTop: 20
                    }}
                />

                {/* Settings */}
                <View style={{ flexDirection: 'row', paddingLeft: 20, paddingTop: 30 }}>
                    <Icon name="cog-outline" style={{ color: '#fff', fontSize: 25 }} />
                    <Text style={{ color: '#fff', fontSize: 20, fontFamily: 'Roboto_italic', paddingLeft: 20 }}>Settings</Text>
                </View>

                {/* Terms & Condition */}
                <View style={{ flexDirection: 'row', paddingLeft: 20, paddingTop: 30 }}>
                    <Icon name="shield-checkmark-outline" style={{ color: '#fff', fontSize: 25 }} />
                    <Text style={{ color: '#fff', fontSize: 20, fontFamily: 'Roboto_italic', paddingLeft: 20 }}>Terms & Condition</Text>
                </View>

                {/* Logout */}
                <TouchableOpacity
                    // Logout When Pressed
                    onPress={() => signOut()}
                >
                    <View style={{ flexDirection: 'row', paddingLeft: 20, paddingTop: 30 }}>
                        <Icon name="log-out-outline" style={{ color: '#fff', fontSize: 25 }} />
                        <Text style={{ color: '#fff', fontSize: 20, fontFamily: 'Roboto_italic', paddingLeft: 20 }}>Logout</Text>
                    </View>
                </TouchableOpacity>

            </ScrollView>
        </Container>
    );
}