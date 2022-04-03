


import React from "react";
import { View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { createStackNavigator } from "@react-navigation/stack"
import Home from '../screens/Home'
import Icon from 'react-native-vector-icons/Ionicons'




const Stack = createStackNavigator();


const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#fff",
    },
    headerTintColor: "#000",
    headerBackTitle: "Back",
};

const MainStackNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={Home}
                options={{
                    title: "GNX GROUP",
                    headerTitleStyle: {
                        color: '#1B2631',
                        fontWeight: 'bold',
                        fontSize: 15,
                        marginRight: 70
                    },
                    headerLeft: () => (
                        <FontAwesome
                            name="map-marker" size={15}
                            backgroundColor="#fff" color='#1B2631'
                        />

                    ),
                    headerRight: () => (
                        <AntDesign style={{ marginRight: 10 }} name="shoppingcart" size={30}
                            backgroundColor="#fff" color='#1B2631'
                        />
                    ),

                    headerRight: () => (
                        <AntDesign style={{ marginRight: 10 }} name="shoppingcart" size={30}
                            backgroundColor="#fff" color='#1B2631'
                        />
                    ),


                }} />


        </Stack.Navigator>
    );
}

export default MainStackNavigator