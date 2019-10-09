import React from 'react'
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet
} from 'react-native'

export default function Settings() {
    return (
        <SafeAreaView>
            <View>
                <View style={{width: '95%', backgroundColor: '#F4E662', marginLeft: 10, marginTop: 10, borderRadius: 10, marginBottom: 5}}>
                    <Text style={{color: 'rgb(49,119,226)', fontSize: 20, fontWeight: 'bold', textAlign: 'center', paddingTop: 15}}>Settings</Text>
                </View>
                <View style={{width: '95%', backgroundColor: '#F4E662', marginLeft: 10, paddingTop: 5, marginTop: 10, borderRadius: 10, marginBottom: 5}}>
                    <Text style={{color: 'rgb(49,119,226)', fontSize: 15}}>Notification Settings:</Text>
                    <Text style={{color: 'rgb(49,119,226)', fontSize: 15}}>Rate our app:</Text>
                    <Text style={{color: 'rgb(49,119,226)', fontSize: 15}}>Contact us:</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}