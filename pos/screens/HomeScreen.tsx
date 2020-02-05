import React, {Component} from 'react';
import Colors from '../constants/Colors';
import Sizes from '../constants/Sizes';

import {
  Text,
  StyleSheet,
  View,
  Image,
    FlatList,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    ProgressBarAndroid
} from 'react-native';

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

interface Prop {}
interface State  {
    isFetchData: false,
    isFetchError: false,
    fetchData: 0
}


class HomeScreen extends Component<Prop, State> {
    constructor(props: State ) {
        super(props);
        this.state = {
            isFetchData: false,
            isFetchError: false,
            fetchData: 0}
    }

    static navigationOptions = ({navigation}) => {
        return {
            header: (
                <>
                <View style={[styles.flex, styles.row, styles.header,]}>

                    <View>
                        <Text style={[styles.title]}>POS</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => {navigation.navigate('Settings')}}>
                        <Image style={styles.avatar}
                               source={{uri: 'https://avatars1.githubusercontent.com/u/30500175?s=48&v=4'}}
                        />
                    </TouchableOpacity>
                </View>

                </>
            ),
        };
    };

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
                this.setState({fetchData: responseText} as Prop);
            })
            .then(() => {
                this.setState({isFetchData: true} as Prop);
            })
            .catch(() => {
                this.setState({isFetchError: true} as Prop)
        });
    };

    componentDidMount() {
        this.fetchAllStuff();
    }


    renderOrders = () => {
        if(this.state.isFetchData) {
            return (    <FlatList
                horizontal
                pagingEnabled
                scrollEnabled
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                snapToAlignment="center"
                style={[ styles.shadow, { overflow: 'visible' }]}
                data={this.state.fetchData[0].items}
                keyExtractor={(item, index) => {
                    return  index.toString();
                }}
                renderItem={({ item, index }) => this.order_item(item, index)}
            />
            )
        } else {
            if(this.state.isFetchError){
                return (
                    <View style={{ flex: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.accent, padding: Sizes.padding }}>
                        <Text style={{fontSize: Sizes.title, fontFamily: 'Montserrat-Bold', color: Colors.white}}>Connection error</Text>
                        <Text style={{fontSize: Sizes.title/2, fontFamily: 'Montserrat-Regular', color: Colors.white}}>Check your internet connection or URL</Text>

                    </View> );
            } else {
                return ( <ProgressBarAndroid styleAttr="Horizontal" color="#2196F3" style={{backgroundColor: Colors.gray4, margin: Sizes.padding,}} /> );
            }
        }
    };

    order_item = (item, index) => {
        return (
            <View key={index} style={[
                styles.flex, styles.column, styles.order_view, styles.shadow,
                index === 0 ? { marginLeft: Sizes.margin } : null,
            ]}>
                <View style={{ justifyContent: 'space-evenly', padding: Sizes.padding / 2 }}>
                    <View style={[ styles.flex, styles.row, styles.order_options ]}>
                        <Text style={styles.order_id}>
                            #{item.id}
                        </Text>

                    </View>
                    <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: Sizes.margin, paddingBottom: Sizes.padding / 4.5, }}>${item.cost}</Text>
                    <Text style={{ color: Colors.gray, fontFamily: 'Montserrat-Bold', }}>{item.time} minutes ago</Text>
                </View>
            </View>
        )
    };

    renderBills = () => {
        if(this.state.isFetchData) {
            // @ts-ignore
            return ( <FlatList
                    vertical
                    pagingEnabled
                    scrollEnabled
                    showsHorizontalScrollIndicator={false}
                    decelerationRate={0}
                    scrollEventThrottle={16}
                    snapToAlignment="center"
                    style={{paddingTop: Sizes.padding * 0.66}}
                    keyExtractor={(item, index) => {
                        return  index.toString();
                    }}
                    renderItem={({ item, index }) => this.bill_item(item, index)}
                    data={this.state.fetchData[1].items}
                />
            )
        } else {
            if(this.state.isFetchError){
                return (  <View style={{ flex: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.accent, padding: Sizes.padding,
                    borderRadius: Sizes.padding}}>
                    <Text style={{fontSize: Sizes.title, fontFamily: 'Montserrat-Bold', color: Colors.white}}>Connection error</Text>
                    <Text style={{fontSize: Sizes.title/2, fontFamily: 'Montserrat-Regular', color: Colors.white}}>Check your internet connection or URL</Text>
                </View> );
            } else {
                return ( <ProgressBarAndroid styleAttr="Horizontal" color="#2196F3" style={{backgroundColor: Colors.gray4, margin: Sizes.padding,}} /> );
            }
        }
    };



    bill_item = (item, index) => {
        return (
            <TouchableOpacity activeOpacity={0.8}>
                <View
                    style={[styles.flex]}
                >
                    <View style={[styles.row, styles.shadow, { marginHorizontal: Sizes.padding, backgroundColor: Colors.white, marginBottom: Sizes.padding * 0.66,
                        padding: Sizes.padding * 0.66, justifyContent: 'space-between', alignItems:'center', borderRadius: Sizes.padding/ 4}]}>
                        <View style={{ flex: 0, flexDirection: 'row', alignItems: 'center'}}>
                            <View style={{paddingEnd: Sizes.padding}}>
                                <Text style={{ color: Colors.black, fontFamily: 'Montserrat-Bold', fontSize: Sizes.font }}>#{item.id}</Text>
                            </View>
                            <View style={{ flex: 0 }}>
                                <Text style={{ color: Colors.black, fontFamily: 'Montserrat-Bold', fontSize: Sizes.title }}>${item.cost}</Text>
                            </View>
                        </View>

                        <View style={{ flex: 0, flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: Colors.gray, fontFamily: 'Montserrat-Bold', fontSize: Sizes.font, paddingStart: Sizes.padding/2 }}>{item.time} minutes ago</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    };

    render() {
        return (
        <>
            <View style={{flex: 1}}>
              <ScrollView style={{flex: 1, backgroundColor: Colors.gray4}}>
                  <View style={[styles.flex, styles.column ]}>
                      <View
                          style={[
                              styles.row,
                              styles.contentRow,
                              {paddingBottom: Sizes.padding/2}
                          ]}
                      >
                          <Text style={[styles.contentTitle]}>Orders</Text>
                          <TouchableOpacity activeOpacity={0.5}>
                          </TouchableOpacity>
                      </View>
                      <View style={[styles.column]}>
                          {this.renderOrders()}
                      </View>
                  </View>

                  <View style={[ styles.column, styles.bills ]}>
                      <View
                          style={[
                              styles.row,
                              styles.contentRow
                          ]}
                      >
                          <Text style={[styles.contentTitle, {paddingTop: Sizes.padding/2}]}>Bills</Text>

                      </View>
                      <View>
                          {this.renderBills()}
                      </View>
                  </View>

              </ScrollView>
            </View>

        </>
    );
  }
}

export default HomeScreen;
