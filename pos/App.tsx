import React, {Component} from 'react';

import {
    View,
    Text, TouchableOpacity, Image, StyleSheet, Dimensions,

} from 'react-native';
import * as Font from "expo-font";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import HomeScreen from "./screens/HomeScreen";
import ContactScreen from "./screens/ContactScreen";
import AboutScreen from "./screens/AboutScreen";
import SupportScreen from "./screens/SupportScreen";
import Colors from "./constants/Colors";
import Sizes from "./constants/Sizes";

const Stack = createStackNavigator();

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({

    flex: {
        flex: 0,
    },

    column: {
        flexDirection: 'column'
    },

    row: {
        flexDirection: 'row'
    },

    header: {
        backgroundColor: Colors.gray4,
        paddingHorizontal: Sizes.padding,
        paddingTop: Sizes.padding,
        paddingBottom: Sizes.padding * 0.66,
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'Montserrat-Regular'
    },
    avatar: {
        width: Sizes.padding,
        height: Sizes.padding,
        borderRadius: Sizes.padding / 2,
    },

    bills: {
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: 30,
        fontFamily: 'Montserrat-Regular'
    },

    order_view: {
        width: (width - (Sizes.padding * 2)) / 2,
        marginHorizontal: Sizes.padding / 4,
        marginTop: Sizes.padding / 2,
        marginBottom: Sizes.padding / 2,
        backgroundColor: Colors.white,
        borderRadius: Sizes.radius,
        fontFamily: 'Montserrat-Regular'
    },

    order_options: {
        alignItems: 'center',
        justifyContent: 'space-between',
        left: 0,
        right: 0,
        fontSize: Sizes.font,
        fontFamily: 'Montserrat-Regular'
    },

    order_id: {
        fontSize: Sizes.font,
        color: Colors.black,
        fontFamily: 'Montserrat-Bold'
    },

    shadow: {
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },

    title: {
        fontSize: Sizes.font * 2,
        fontFamily: 'Montserrat-Bold',
    },

    contentTitle: {
        fontSize: Sizes.font,
        fontFamily: 'Montserrat-Bold',
    },

    contentRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingStart: Sizes.padding,
        paddingEnd: Sizes.padding,
        fontFamily: 'Montserrat-Regular'
    },

});


function MyStack() {
    return (
        <Stack.Navigator initialRouteName={"Home"}>
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'My home',  header: ({navigation}) => (
                    <>
                        <View style={[styles.flex, styles.row, styles.header,]}>

                            <View>
                                <Text style={[styles.title]}>POS</Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.5} onPress={() => {navigation.navigate('Contact')}}>
                                <Image style={styles.avatar} source={{uri: 'https://avatars1.githubusercontent.com/u/30500175?s=48&v=4'}} />
                            </TouchableOpacity>
                        </View>

                    </>
                ), }} />
            <Stack.Screen name="Contact" component={ContactScreen} />
            <Stack.Screen name="About" component={AboutScreen} />
            <Stack.Screen name="Support" component={SupportScreen} />
        </Stack.Navigator>
    );
}


export default class App extends Component {
    state = {fontsLoaded: false};

    loadFonts() {
        return Font.loadAsync({
            "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
            "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
            "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
            "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
            "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf")
        });
    }

    async componentDidMount() {
        await this.loadFonts();
        this.setState({ fontsLoaded: true });
    }

    render() {
        if(this.state.fontsLoaded){
            return ( <NavigationContainer>
                <MyStack />
            </NavigationContainer>);
        } else {
            return (
                <View style={{flex: 1,flexDirection: 'column', alignContent: 'center', justifyContent: 'center', }}>
                    <Text style={{padding: 24}}>Loading</Text>
                </View>
            )
        }


    }
}


