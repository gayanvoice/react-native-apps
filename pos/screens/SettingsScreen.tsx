import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/Colors';
import Sizes from '../constants/Sizes';


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
        paddingHorizontal: Sizes.padding,
        paddingTop: Sizes.padding,
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },

    back: {
        width: Sizes.base * 3,
        height: Sizes.base * 3,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },

    title: {
        fontSize: Sizes.font * 1.5,
        fontFamily: 'Montserrat-Bold',
    },


    content: {
        paddingTop: Sizes.padding * 3,
        paddingStart: Sizes.padding,
        paddingEnd: Sizes.padding,
    },

    inputTitle: {
        fontSize: Sizes.font,
        color: Colors.gray,
        fontFamily: 'Montserrat-Regular',
        backgroundColor: 'transparent',
    },

    inputContent: {
        fontSize: Sizes.font,
        color: Colors.black,
        fontFamily: 'Montserrat-Bold',
        backgroundColor: 'transparent',
    },

    inputEdit: {
        fontSize: Sizes.font,
        color: Colors.active,
        fontFamily: 'Montserrat-Bold',
        backgroundColor: 'transparent',
    },

    inputStart: {
        alignItems: 'flex-start',

    },

    inputEnd: {
        alignItems: 'flex-end',
        justifyContent: 'center',
    },

    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: Sizes.padding,
    },

    inputHorizontalRow: {
        borderBottomColor: Colors.light_gray,
        borderBottomWidth: 1,
        marginBottom: Sizes.padding,
    },

    shadow: {
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },


});


const SettingsScreen = () => {
    return (

        <>
            <View style={[styles.flex, styles.content]}>
                <View style={[styles.inputRow]}>
                    <View style={[styles.inputStart]}>
                        <Text style={[styles.inputTitle]}>Username</Text>
                        <Text style={[styles.inputContent]}>Gayan</Text>
                    </View>
                    <View style={[styles.inputEnd]}>
                        <Text style={[styles.inputEdit]}>Edit</Text>
                    </View>
                </View>

                <View style={[styles.inputRow]}>
                    <View style={[styles.inputStart]}>
                        <Text style={[styles.inputTitle]}>Email</Text>
                        <Text style={[styles.inputContent]}>kuruppu.gayan@gmail.com</Text>
                    </View>
                    <View style={[styles.inputEnd]}>
                        <Text style={[styles.inputEdit]}>Edit</Text>
                    </View>
                </View>

                <View style={[styles.inputRow]}>
                    <View style={[styles.inputStart]}>
                        <Text style={[styles.inputTitle]}>Password</Text>
                        <Text style={[styles.inputContent]}>********</Text>
                    </View>
                    <View style={[styles.inputEnd]}>
                        <Text style={[styles.inputEdit]}>Edit</Text>
                    </View>
                </View>

                <View style={[styles.inputHorizontalRow]}/>

                <View style={[styles.inputRow]}>
                    <View style={[styles.inputStart]}>
                        <Text style={[styles.inputTitle]}>Store</Text>
                        <Text style={[styles.inputContent]}>Pizza</Text>
                    </View>
                    <View style={[styles.inputEnd]}>
                        <Text style={[styles.inputEdit]}>Edit</Text>
                    </View>
                </View>
            </View>
        </>
    );
};

export default SettingsScreen;

