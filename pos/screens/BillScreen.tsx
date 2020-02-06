import React, {Component} from 'react';
import Colors from '../constants/Colors';
import Sizes from '../constants/Sizes';


import {
    Text, SafeAreaView,
    StyleSheet, View, TouchableOpacity, FlatList,
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

    inputRowCenter: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: Sizes.padding,
    },

    inputHorizontalRow: {
        borderBottomColor: Colors.light_gray,
        borderBottomWidth: 1,
        marginBottom: Sizes.padding,
    },
    inputContentCenter: {
        fontSize: Sizes.margin,
        color: Colors.black,
        fontFamily: 'Montserrat-Bold',
        backgroundColor: 'transparent',
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


const BillScreen = ({route}) => {
    const {bill} = route.params;
    return (
        <>
            <View style={[styles.flex, styles.content]}>
                <View style={[styles.inputRowCenter]}>
                    <Text style={[styles.inputContentCenter]}>${bill.cost}</Text>
                </View>

                <View style={[styles.inputRow]}>
                    <View style={[styles.inputStart]}>
                        <Text style={[styles.inputContent]}>Items</Text>
                    </View>
                </View>
                <SafeAreaView>
                    <FlatList
                        pagingEnabled
                        scrollEnabled
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={16}
                        snapToAlignment="center"
                        style={[ styles.shadow, { overflow: 'visible' }]}
                        data={bill.items}
                        keyExtractor={(item, index) => {
                            return  index.toString();
                        }}
                        renderItem={({ item, index }) => bill_item(item, index)}
                    />
                </SafeAreaView>

            </View>
        </>
    );
};

const bill_item = (item, index) => {

    return (
        <TouchableOpacity activeOpacity={0.8} key={index}>
            <View
                style={[styles.flex]}
            >
                <View style={[styles.row, { marginHorizontal: Sizes.padding,
                    paddingVertical: Sizes.padding * 0.66, justifyContent: 'space-between', alignItems:'center'}]}>
                    <View style={{ flex: 0, flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{paddingEnd: Sizes.padding}}>
                            <Text style={{ color: Colors.black, fontFamily: 'Montserrat-Bold', fontSize: Sizes.font }}>#{item.id}</Text>
                        </View>
                        <View style={{ flex: 0 }}>
                            <Text style={{ color: Colors.black, fontFamily: 'Montserrat-Bold', fontSize: Sizes.font }}>${item.name}</Text>
                        </View>
                    </View>

                    <View style={{ flex: 0, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: Colors.gray, fontFamily: 'Montserrat-Bold', fontSize: Sizes.font, paddingStart: Sizes.padding/2 }}>{item.items}</Text>
                    </View>


                    <View style={{ flex: 0, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: Colors.gray, fontFamily: 'Montserrat-Bold', fontSize: Sizes.font, paddingStart: Sizes.padding/2 }}>${item.cost}</Text>
                    </View>


                </View>
            </View>
        </TouchableOpacity>
    )
};



export default BillScreen;
