import React from 'react';
import { FlatList, StyleSheet, Text, View, SafeAreaView, Button, Image } from 'react-native';
import { FontAwesome, SimpleLineIcons } from '@expo/vector-icons'
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

export default class ReturningList extends React.Component {
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
      <View style={{width: '95%', height: 95, backgroundColor: '#F4E662', marginLeft: 10, paddingTop: 5, marginTop: 10, borderRadius: 10, marginBottom: 5}}><Text style={{color: 'rgb(49,119,226)', fontSize: 20, fontWeight: 'bold', textAlign: 'center', paddingTop: 15}}>Here's categories of items in your #365FirstsChallenge List:</Text></View>

      <FlatList
        data={[
          { key: '#BeautyFirsts' },
          { key: '#DanceFirsts' },
          { key: '#DonationFirsts' },
          { key: '#MusicFirsts' },
          { key: '#VolunteeringFirsts' },
          { key: '#WorkFirsts' }
        ]}
        renderItem={({item}) => 
        <View style={{width: '90%', height: 55, borderBottomColor: 'lightgrey', borderBottomWidth: 1, marginLeft: 10, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
          <Text style={styles.item}>{item.key}</Text>
          <FontAwesome style={{position:'relative'}} name='circle' size={32} color='#ff4242' />
          <Text style={{position: 'relative', right: 18}}>3</Text>
        </View>
        }
      />
      <View style={{width: '95%', height: 65, backgroundColor: '#F4E662', marginLeft: 10, paddingTop: 5, marginTop: 10, borderRadius: 10, marginBottom: 5}}><Text style={{color: 'rgb(49,119,226)', fontSize: 20, fontWeight: 'bold', textAlign: 'center', paddingTop: 15}}>Add more categories to your list!</Text></View>
      <FlatList
        data={[
          { key: '#AccidentFirsts', },
          { key: '#ActivityFirsts', },
          { key: '#AnimalFirsts', },
          { key: '#ArtFirsts', },
          { key: '#CarFirsts', },
          { key: '#ChoreFirsts', },
          { key: '#CraftFirsts', },
          { key: '#EducationFirsts', },
          { key: '#FitnessFirsts', },
          { key: '#FoodFirsts', },
          { key: '#GamblingFirsts', },
          { key: '#GameFirsts', },
          { key: '#GoodDeedFirsts', },
          { key: '#HealthFirsts', },
          { key: '#LifeFirsts', },
          { key: '#LifeSkillsFirsts', },
          { key: '#OutdoorFirsts', },
          { key: '#RelationshipFirsts', },
          { key: '#SelfCareFirsts', },
          { key: '#SexualFirsts', },
          { key: '#SportFirsts', },
          { key: '#TransportationFirsts',},
          { key: '#TravelFirsts', },
        ]}
        renderItem={({item}) => <View style={{width: '90%', height: 45, borderBottomColor: 'lightgrey', borderBottomWidth: 1, marginLeft: 10}}><Text style={styles.item}>{item.key}</Text></View>}
      />
      <View style={{backgroundColor: "#F4E662", height: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}} >
        <Button title="Find more firsts!"/>
      </View>
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
  },
})