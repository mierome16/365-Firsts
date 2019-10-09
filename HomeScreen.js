import React, { Component } from 'react';
import { SectionList, SafeAreaView, StyleSheet, Text, View, Button, Image } from 'react-native';
import moment from 'moment'
import { items } from './items'
import { Ionicons } from '@expo/vector-icons';
import HamburgerIcon from './HamburgerIcon'


export default class HomeScreen extends Component {
    static navigationOptions = () => {
        return {
          headerLeft: <HamburgerIcon />,
          headerTitle: <Image
          source={require('./assets/logoWhite.png')}
          style={{ width: 175, height: 44 }}
        />,
          headerStyle: {
            backgroundColor: 'rgb(49,119,226)',
          },
        }
        // headerStyle: {
        //   backgroundColor: '#f4511e',
        // },
        // headerTintColor: '#fff',
        // headerTitleStyle: {
        //   fontWeight: 'bold',
        // },
      }
    render () {
    return (
        <SafeAreaView>
            <View style={{width: '95%', height: 95, backgroundColor: '#F4E662', marginLeft: 10, paddingTop: 5, marginTop: 10, borderRadius: 10, marginBottom: 5}}>
                <Text style={{color: 'rgb(49,119,226)', fontSize: 20, fontWeight: 'bold', textAlign: 'center', paddingTop: 15}}>
                    Welcome Back! Here's your upcoming Firsts
                </Text>
            </View>
            <View>
                <SectionList
                sections={[
                    {
                        title: 'Overdue', 
                        data: [items[0], items[1], items[2]]
                    },
                    {
                        title: '7 Days', 
                        data: [items[3], items[4]]
                    },
                    {
                        title: '15 Days', 
                        data: [items[5], items[6]] 
                    },
                    {
                        title: '30 Days', 
                        data: [items[7], items[8], items[9]]
                    },
                    {
                        title: '45 Days', 
                        data: [items[10], items[11], items[12], items[13]]
                    },
                    {
                        title: '60 Days', 
                        data: [items[14], items[15]]
                    },
                    {
                        title: '90 Days', 
                        data: [items[16]]
                    },
                    {
                        title: '180 Days',
                        data: [items[17]]
                    },
                    {
                        title: '365 Days', 
                        data: [items[18]]
                    },
                ]}
                renderItem={({item}) => 
                <View style={{alignItems:'center', flexDirection: 'row', justifyContent:'space-between', paddingLeft: 10, paddingRight: 10}}>
                    <View>
                        <Text>{"#" + item.cat}</Text>
                        <Text style={styles.item}>{item.name}</Text>
                    </View>
                    <View>
                        <Text style={{textAlign: 'right'}}>{item.due === 1 ? moment().subtract(1, 'days').fromNow(): moment().add(item.due, 'days').fromNow()}</Text>   
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View style={{width: 40, marginRight: 5, borderRadius: 10,}}>
                                <Ionicons name="md-checkmark" size={32} />
                            </View>
                            <View style={{width: 40, marginRight: 5, borderRadius: 10}}>
                                <Ionicons name="md-calendar" size={32}  />
                            </View>
                            <View style={{width: 40, marginRight: 5, borderRadius: 10}}>
                                <Ionicons name="md-remove" size={32} />
                            </View>
                        </View>
                    </View>
                    
                    
                </View>}
                renderSectionHeader={({section}) => <View style={{width: '95%', height: 50, backgroundColor: section.title === 'Overdue' ? '#ff4242' : '#F4E662', marginLeft: 10, paddingTop: 5, marginTop: 10, borderRadius: 10, marginBottom: 5}}><Text style={{color: section.title === 'Overdue' ? '#fff' : 'rgb(49,119,226)', fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>{section.title}</Text></View>}
                keyExtractor={(item, index) => index}
                />
            </View>
      </SafeAreaView>
    ) 
    }; 
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
