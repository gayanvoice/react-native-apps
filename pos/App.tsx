import React, {Component} from 'react';

import {
    View,
    Text,

} from 'react-native';
import * as Font from "expo-font";

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from "./screens/HomeScreen";
import ContactScreen from "./screens/ContactScreen";
import AboutScreen from "./screens/AboutScreen";

export enum ROUTES {
    MainHome = "MainHome",
    MainContact = "MainContact",
    MainAbout = "MainAbout"
}


const AppNavigator = createStackNavigator(
    {
        [ROUTES.MainHome]: { screen:  HomeScreen },
        [ROUTES.MainContact]: { screen: ContactScreen },
        [ROUTES.MainAbout]: { screen: AboutScreen },
    },
    {
        initialRouteName: ROUTES.MainAbout,
    },
);

const AppContainer = createAppContainer(AppNavigator);

interface Prop {}
interface State  {
    fontsLoaded: false;
}



export default class App extends Component<Prop, State> {
    constructor(props: State ) {
        super(props);
        this.state = {fontsLoaded: false};
    }



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
        this.setState({ fontsLoaded: true } as Prop);
    }

    render() {
        if(this.state.fontsLoaded){
            return <AppContainer />;
        } else {
            return (
                <View style={{flex: 1,flexDirection: 'column', alignContent: 'center', justifyContent: 'center', }}>
                    <Text style={{padding: 24}}>Loading</Text>
                </View>
            )
        }


    }
}


