import { StyleSheet, Text,TextInput, View } from 'react-native'
import React from 'react'
import { useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';

export default function () {
    const[searchText, setSearchText]=useState('');
    
return (
    <View style={styles.container}>
        <Feather name="search" color={'black'} size={25} style={styles.icon}/>
        
        <TextInput
            placeholder='Search'
            //value='searchText'
            onChangeText={setSearchText}
            style={styles.input}
        />

    </View>
)
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        margin: 10,
        position: 'relative',
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: '#e6dcdcff',
        borderWidth: 1,
        paddingLeft: 40,
        borderRadius: 90,
        paddingHorizontal: 10,
        backgroundColor: '#bcd6e1ff',
    },
    icon:{
        position: 'absolute',
        left: 20,
        zIndex: 1,
    },
})
