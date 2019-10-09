import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView
} from 'react-native';
import HamburgerIcon from './HamburgerIcon'
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import CardStack, { Card } from 'react-native-card-stack-swiper';
import { items } from './items'

let index = 0;

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

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('./assets/logoWhite.png')}
        style={{ width: 175, height: 40 }}
      />
    );
  }
}

export default class Swipe extends Component {
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
        
      <SafeAreaView style={{flex:1}}>
        <CardStack
          style={styles.content}

          renderNoMoreCards={() => <Text style={{fontWeight:'700', fontSize:18, color:'gray'}}>No more cards :(</Text>}
          ref={swiper => {
            this.swiper = swiper
          }}

          onSwiped={() => {
              index+=1
              console.log('cardSwiped', index-1)
          }}
          onSwipedLeft={() => console.log('onSwipedLeft')}
        >
            {items.map((cat, i) => {
                return (
                    <Card key={i} style={[styles.card, i % 2 === 0 ? styles.card1 : styles.card2]}>
                      <Text style={styles.label}>{cat.name}</Text>
                      <Text style={{textAlign: 'center', color: 'white'}}>#{cat.cat}</Text>
                    </Card>
                )
            })}
        </CardStack>
        <View style={styles.footer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button,styles.red]} onPress={()=>{
              this.swiper.swipeLeft();
            }}>
              <FontAwesome name='thumbs-o-up' size={32} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,styles.orange]} onPress={() => {
              this.swiper.goBackFromBottom();
            }}>
              <Ionicons name='md-undo' size={32} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,styles.orange]} onPress={() => {
              this.swiper.swipeTop();
            }}>
              <Ionicons name='md-checkmark' size={32} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,styles.green]} onPress={()=>{
              this.swiper.swipeRight();
            }}>
              <FontAwesome name='thumbs-o-down' size={32} />
            </TouchableOpacity>
          </View>

        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content:{
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card:{
    width: 350,
    height: 550,
    backgroundColor: '#FE474C',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity:0.5,
  },
  card1: {
    backgroundColor: '#FE474C',
  },
  card2: {
    backgroundColor: '#FEB12C',
  },
  label: {
    lineHeight: 100,
    textAlign: 'center',
    fontSize: 35,
    fontFamily: 'System',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  footer:{
    justifyContent:'center',
    alignItems:'center',
    paddingBottom: 25
  },
  buttonContainer:{
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  button:{
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity:0.5,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
    zIndex: 0,
  },
  orange:{
    width:55,
    height:55,
    borderWidth:6,
    borderColor:'rgb(246,190,66)',
    borderWidth:4,
    borderRadius:55,
    marginTop:-15
  },
  green:{
    width:75,
    height:75,
    backgroundColor:'#fff',
    borderRadius:75,
    borderWidth:6,
    borderColor:'#01df8a',
  },
  red:{
    width:75,
    height:75,
    backgroundColor:'#fff',
    borderRadius:75,
    borderWidth:6,
    borderColor:'#fd267d',
  }
});