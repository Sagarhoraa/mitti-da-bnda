import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import  Entypo  from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';


export default function Message() {
    
  return (
    <View style={styles.container}>
      <View style={styles.MessageHeader}>
        <Text style={styles.headingText}>messenger</Text>
        <View style={styles.IconsContainer}>
            <Entypo name="camera" color={'black'} size={30}/>
            <AntDesign name="edit" color={'black'} size={30}/>

        </View>
        
      </View>
      
        
    </View>
  )
}



const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        
        fontWeight: '600',
        marginVertical: 10,
        marginLeft: 10,
    },
    container:{
        marginVertical: 10,
        marginHorizontal: 10,

    },
    MessageHeader:{
        flexDirection: 'row',
        justifyContent: 'space-between', // Text on left, icon on right
        alignItems: 'center', // vertical alignment
    },
    IconsContainer:{
        flexDirection: 'row',
        gap: 15, // Text on left, icon on right
    },
    
})