import React from 'react'
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet
} from 'react-native'


export default function Profile() {
    return (
        <SafeAreaView>
            <View>
                <View style={{width: '95%', backgroundColor: '#F4E662', marginLeft: 10, marginTop: 10, borderRadius: 10, marginBottom: 5}}>
                    <Text style={{color: 'rgb(49,119,226)', fontSize: 20, fontWeight: 'bold', textAlign: 'center', paddingTop: 15}}>Profile</Text>
                </View>
                <View style={{width: '95%', backgroundColor: '#F4E662', marginLeft: 10, paddingTop: 5, marginTop: 10, borderRadius: 10, marginBottom: 5}}>
                    <Text style={{color: 'rgb(49,119,226)', fontSize: 15}}>Name:</Text>
                    <Text style={{color: 'rgb(49,119,226)', fontSize: 15}}>Username:</Text>
                    <Text style={{color: 'rgb(49,119,226)', fontSize: 15}}>Email:</Text>
                    <Text style={{color: 'rgb(49,119,226)', fontSize: 15}}>Change password:</Text>
                    <Text style={{color: 'rgb(49,119,226)', fontSize: 15}}>Date of Birth:</Text>
                    <Text style={{color: 'rgb(49,119,226)', fontSize: 15}}>Bio:</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}