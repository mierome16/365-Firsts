import React from 'react';
import { FlatList, StyleSheet, Text, View, SafeAreaView, Button, Image } from 'react-native';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import HamburgerIcon from './HamburgerIcon'

const mainCategories = [
  '#AccidentFirsts', 
  '#ActivityFirsts', 
  '#AnimalFirsts', 
  '#ArtFirsts', 
  '#BeautyFirsts', 
  '#CarFirsts', 
  '#ChoreFirsts', 
  '#CraftFirsts', 
  '#DanceFirsts', 
  '#DonationFirsts', 
  '#EducationFirsts', 
  '#FitnessFirsts', 
  '#FoodFirsts', 
  '#GamblingFirsts', 
  '#GameFirsts', 
  '#GoodDeedFirsts', 
  '#HealthFirsts', 
  '#LifeFirsts', 
  '#LifeSkillsFirsts', 
  '#MusicFirsts', 
  '#OutdoorFirsts', 
  '#RelationshipFirsts', 
  '#SelfCareFirsts', 
  '#SexualFirsts', 
  '#SportFirsts', 
  '#TransportationFirsts',
  '#TravelFirsts', 
  '#VolunteeringFirsts', 
  '#WorkFirsts'
]



export default class Completed extends React.Component {
  static navigationOptions = () => {
    return {
      headerLeft: <HamburgerIcon />,
      headerTitle: <Image
      source={require('./assets/logoWhite.png')}
      style={{ width: 175, height: 40 }}
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
  render() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{width: '95%', height: 95, backgroundColor: '#F4E662', marginLeft: 10, paddingTop: 5, marginTop: 10, borderRadius: 10, marginBottom: 5}}><Text style={{color: 'rgb(49,119,226)', fontSize: 20, fontWeight: 'bold', textAlign: 'center', paddingTop: 15}}>Congratulations on all your completed Firsts!</Text></View>
        <View style={{justifyContent: 'center'}}>
            <View style={{flexDirection: 'row', justifyContent:'space-evenly'}}>
                <View>
                    <Ionicons style={{textAlign: 'center'}} name='md-trophy' size={42}/>
                    <Text>First 10</Text>
                </View>
                <View>
                    <Ionicons style={{textAlign: 'center'}} name='md-trophy' size={42}/>
                    <Text>First 100</Text>
                </View>
                <View>
                    <Ionicons style={{textAlign: 'center'}} name='md-trophy' size={42}/>
                    <Text>First 200</Text>
                </View>
                <View>
                    <Ionicons style={{textAlign: 'center'}} name='md-trophy' size={42}/>
                    <Text>First 300</Text>
                </View>    
                <View>
                    <Ionicons style={{textAlign: 'center'}} name='md-trophy' size={42}/>
                    <Text>First 365</Text>
                </View>    
            </View>
            <View style={{flexDirection: 'row', justifyContent:'space-evenly'}}>
                <View>
                    <SimpleLineIcons style={{textAlign: 'center'}} name='badge' size={42}/>
                    <Text style={{textAlign:'center'}}>New First</Text>
                </View>
                <View>
                    <SimpleLineIcons style={{textAlign: 'center'}} name='badge' size={42}/>
                    <Text>First 25</Text>
                </View>
                <View>
                    <SimpleLineIcons style={{textAlign: 'center'}} name='badge' size={42}/>
                    <Text>First 50</Text>
                </View>
                <View>
                    <SimpleLineIcons style={{textAlign: 'center'}} name='badge' size={42}/>
                    <Text>First 75</Text>
                </View>    
                <View>
                    <SimpleLineIcons style={{textAlign: 'center'}} name='badge' size={42}/>
                    <Text>First 125</Text>
                </View>    
            </View>
        </View>
        <View style={{width: '95%', height: 65, backgroundColor: '#F4E662', marginLeft: 10, paddingTop: 5, marginTop: 10, borderRadius: 10, marginBottom: 5}}>
            <Text style={{color: 'rgb(49,119,226)', fontSize: 20, flexWrap: 'wrap', fontWeight: 'bold', textAlign: 'center', paddingTop: 5}}>Firsts you've completed before #365Firsts</Text>
        </View>
      <FlatList
        data={[
          { key: '#AccidentFirsts', },
          { key: '#ActivityFirsts', },
          { key: '#AnimalFirsts', },
          { key: '#ArtFirsts', },
        ]}
        renderItem={({item}) => <View style={{width: '90%', height: 45, borderBottomColor: 'lightgrey', borderBottomWidth: 1, marginLeft: 10}}><Text style={styles.item}>{item.key}</Text></View>}
      />
      <View style={{width: '95%', height: 65, backgroundColor: '#F4E662', marginLeft: 10, paddingTop: 5, marginTop: 10, borderRadius: 10, marginBottom: 5}}>
            <Text style={{color: 'rgb(49,119,226)', fontSize: 20, fontWeight: 'bold', textAlign: 'center', paddingTop: 15}}>Your completed firsts from the list!</Text>
        </View>
      <FlatList
        data={[
          { key: '#BeautyFirsts' },
          { key: '#DanceFirsts' },
          { key: '#DonationFirsts' },
          { key: '#MusicFirsts' },
          { key: '#VolunteeringFirsts' },
          { key: '#WorkFirsts' }
        ]}
        renderItem={({item}) => <View style={{width: '90%', height: 45, borderBottomColor: 'lightgrey', borderBottomWidth: 1, marginLeft: 10}}><Text style={styles.item}>{item.key}</Text></View>}
      />
         </SafeAreaView>
  )
}
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    borderBottomWidth: 3,
    borderBottomColor: 'grey',
    fontSize: 18,
    height: 44,
    width: '100%'
  },
})