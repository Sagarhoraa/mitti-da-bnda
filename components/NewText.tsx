import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function NewText() {
  return (
    <View style={styles.container}>
      <Text style={styles.fontStyle}>New Group</Text>
      <View style={styles.archive}>
        <Text style={styles.fontStyle}>Archive(3)</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
},
archive:{
    flex:1,
    flexDirection: 'row',
    justifyContent:'flex-end',
    position: 'absolute',
    right: 10,
},
fontStyle:{
  fontSize: 13,
}


})