import React, {Component} from 'react';
import Colors from '../constants/Colors';
import Sizes from '../constants/Sizes';


import {
    Text, SafeAreaView,
    StyleSheet, View, TouchableOpacity, FlatList, Image,
} from 'react-native';

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
        color: Colors.black,
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

    avatar: {
        width: Sizes.padding,
        height: Sizes.padding,
        borderRadius: Sizes.padding / 2,
    },
});


const UserScreen = ({route}) => {
    const {user} = route.params;
    return (
        <>
            <View style={[styles.flex, styles.content]}>
                <View style={[styles.inputRow]}>
                    <View style={[styles.inputStart]}>
                        <Text style={[styles.inputTitle]}>Username</Text>
                        <Text style={[styles.inputContent]}>{user.username}</Text>
                    </View>
                    <View style={[styles.inputEnd]}>
                        <Image style={styles.avatar} source={{uri: user.image}} />
                    </View>
                </View>

                <View style={[styles.inputRow]}>
                    <View style={[styles.inputStart]}>
                        <Text style={[styles.inputTitle]}>Status</Text>
                        <Text style={[styles.inputContent]}>{user.status? 'Available' : 'Not Available'}</Text>
                    </View>
                </View>

                <View style={[styles.inputHorizontalRow]}/>

                <View style={[styles.inputRow]}>
                    <View style={[styles.inputStart]}>
                        <Text style={[styles.inputTitle]}>Role</Text>
                        <Text style={[styles.inputContent]}>{user.role}</Text>
                    </View>
                </View>

                <View style={[styles.inputHorizontalRow]}/>

                <View style={[styles.inputRow]}>
                    <View style={[styles.inputStart]}>
                        <Text style={[styles.inputTitle]}>Bio</Text>
                        <Text style={[styles.inputContent]}>{user.bio}</Text>
                    </View>
                </View>

                <View style={[styles.inputHorizontalRow]}/>

                <View style={[styles.inputRow]}>
                    <View style={[styles.inputStart]}>
                        <Text style={[styles.inputTitle]}>Last online</Text>
                        <Text style={[styles.inputContent]}>{user.time} minutes ago</Text>
                    </View>
                </View>

            </View>
        </>
    );
};



export default UserScreen;
