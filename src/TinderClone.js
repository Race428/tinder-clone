import React, { Component } from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

class TinderClone extends Component {
    render() {
        return (
            <View style={{flex:1, width: 100 + '%', height: 100 + '%'}}>
          
                <View style ={{width: 100 + '%', height: 75, backgroundColor: 'black' }}/>
                <Image 
                style={{width: 100 + '%', height: 100 }}
                source={{
                    uri: 'https://render.fineartamerica.com/images/rendered/default/poster/8/10/break/images/artworkimages/medium/1/awaiting-spring-black-lab-puppy-black-dog-art-judy-burrows.jpg'
                }}
                 /> 
                 </View>
         
        )
    }
}

// const styles = StyleSheet.create()

export default TinderClone

