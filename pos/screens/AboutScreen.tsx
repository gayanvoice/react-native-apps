import React, { Component } from 'react';
import {Button, Image, ProgressBarAndroid, Text, TouchableOpacity, View} from 'react-native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import Colors from "../constants/Colors";
import Sizes from "../constants/Sizes";

interface NavigationParams {
    text: string;
}

type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

interface State {
    navigation: Navigation,
    isFetchData: boolean,
    isFetchError: boolean,
    fetchData: any,
}
interface Props {}

class AboutScreen extends Component<State, Props> {

    state = {
        isFetchData: false,
        isFetchError: false,
        fetchData: [],
    };

    public static navigationOptions = ({ navigation,} : {
        navigation: Navigation;
    }) => ({
        title: 'About',
        header: () => (
            <>
                <TouchableOpacity activeOpacity={0.5} onPress={() => {navigation.navigate('Settings')}}>
                    <Image source={{uri: 'https://avatars1.githubusercontent.com/u/30500175?s=48&v=4'}}
                    />
                </TouchableOpacity>
            </>
        ),
    });

    fetchAllStuff = () => {
        Promise.all([
            fetch('https://raw.githubusercontent.com/gayanvoice/expo-ui/master/pos/orders_data.json'),
            fetch('https://raw.githubusercontent.com/gayanvoice/expo-ui/master/pos/bill_data.json'),
            fetch('https://raw.githubusercontent.com/gayanvoice/expo-ui/master/pos/user_data.json')
        ]).then(async([a, b, c]) => {
            const x = await a.json();
            const y = await b.json();
            const z = await c.json();
            return [x, y, z]
        })
            .then((responseText) => {
                this.setState({fetchData: responseText});
            })
            .then(() => {
                this.setState({isFetchData: true});

            })
            .catch(() => {
                this.setState({isFetchError: true})
            });
    };

    componentDidMount() {
        this.fetchAllStuff();
    }

    renderItems = () => {
        const { navigation } = this.props;

        const {
            state: { params },
        } = navigation;

        if(!this.state.isFetchData) {
            return ( <ProgressBarAndroid styleAttr="Horizontal" color="#2196F3" style={{backgroundColor: Colors.gray4, margin: Sizes.padding,}} /> );
        } else {
            console.log(this.state.fetchData[0]);
            return (
                <View>
                    <Text>fetch Data: {this.state.isFetchData ? this.state.fetchData[0].items.toString() : 'No Data'}</Text>
                    <Button
                        title="Button"
                        onPress={() => {
                            navigation.navigate('MainContact', { text: 'Hello!' });
                        }}
                    />
                </View>
            );
        }
    };

    render() {
        return (this.renderItems());
    }
}

export default AboutScreen;
