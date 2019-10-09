import * as React from 'react'
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    Button,
    TouchableHighlight
} from 'react-native'



export default function Categories(){
    // cat(s) = abbreviation for categories
    const [colors, setColors] = React.useState(false)
    const cats = [1, 2, 3, 4, 5, 6]

    function handlePress() {
        setColors(!colors)
    }
    return (
        
        <ScrollView contentContainerStyle={{
            marginTop: 100,
            marginBottom: 100,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignContent: 'center'
        }}>
            <Text>Select categories to swipe to make your #365FirstsChallenge List!</Text>
            {cats.map(cat => {
                return (
                    <TouchableHighlight style={colors ? styles.click : styles.notClicked} onPress={handlePress} key={cat}>
                        <Text>#{cat}</Text>
                    </TouchableHighlight>
            )})}
            
            <Button 
            title="Start Swiping"
            onPress={() => {
                this.props.navigation.navigate('Swipe', {
                itemId: 86,
                otherParam: 'anything you want here',
                });
            }}
            />

        </ScrollView>
          
    )
}

const styles = StyleSheet.create({
    notClicked: {
        width: 175,
        margin: 10,    
        height: 100,
        borderColor: '#000',
        borderWidth: 1,
        backgroundColor: '#fff'
    },
    click: {
        backgroundColor: '#bbb',
        width: 175,
        margin: 10,    
        height: 100,
        borderColor: '#000',
        borderWidth: 1
    }
})