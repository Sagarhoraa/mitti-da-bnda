import { Image,ScrollView,StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default function ContactList() {
    const contacts=[
        {
            uid:1,
            name:'Sagar',
            status:'Hello there, I am using WhatsApp',
            imageUrl:'https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_27.png',
        },
        {
            uid:2,
            name:'Anish',
            status:'Hello there, I am using Facebook',
            imageUrl:'https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_18.png',
        },
        {
            uid:3,
            name:'Dibya',
            status:'Hello there, I am using Instagram',
            imageUrl:'https://cdn.jsdelivr.net/gh/alohe/memojis/png/vibrent_26.png',
        },
        {
            uid:4,
            name:'Rihitik Poudel',
            status:'Hello there, I am using WhatsApp',
            imageUrl:'https://cdn.jsdelivr.net/gh/alohe/memojis/png/vibrent_8.png',
        },
        {
            uid:5,
            name:'Prashant',
            status:'Hello there, I am using Facebook',
            imageUrl:'https://cdn.jsdelivr.net/gh/alohe/memojis/png/vibrent_23.png',
        },
        {
            uid:6,
            name:'Dolbatti',
            status:'Hello there, I am using Instagram',
            imageUrl:'https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_1.png',
        },

    ];
  return (
    <View style={styles.container}> 
      
      <ScrollView
      horizontal showsHorizontalScrollIndicator={false}
      
      
      scrollEnabled={true}
>
        {contacts.map(({uid,name, imageUrl}) => (
            <View key={uid} style={styles.userCard}>
                <Image 
                source={{
                    uri: imageUrl

                }}
                 style={styles.userImage}
                 />
                 
                 <Text style={styles.userName}>{name}</Text>
                 
                 
            </View>
        ))}
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
 
  container: {
     flex: 1,
    backgroundColor: '#fff',
    
  },
  userCard:{
    alignItems: 'center',
    marginHorizontal: 10,
    width: 80,
  },

  userImage: {
    
    width: 60,

    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  userName: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  
});