import React from 'react';
import { Button, Text, View } from 'react-native';

const SupportScreen = ({navigation}) => {
    return (
        <View>
            <Text>Param: Contact</Text>
            <Button title={"Click"} onPress={() => {navigation.navigate('Contact')}}/>
        </View>
    );
};

export default SupportScreen;

