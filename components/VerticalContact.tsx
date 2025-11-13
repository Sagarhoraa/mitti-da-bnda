import { Image,ScrollView,StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default function VerticalContact() {
    const contacts=[
        {
      uid: 4,
      name: 'Rihitik Poudel',
      status: 'Hello there, I am using WhatsApp',
      time: '10:30 AM',
      imageUrl: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/vibrent_8.png',
    },
    {
      uid: 6,
      name: 'Dolbatti Shrestha',
      status: 'Hello there, I am using Instagram',
      time: '9:45 AM',
      imageUrl: 'https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_1.png',
    },
    {
      uid: 3,
      name: 'Dibya Kumari',
      status: 'Hello there, I am using Instagram',
      time: 'Yesterday',
      imageUrl: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/vibrent_26.png',
    },
    {
      uid: 1,
      name: 'Sagar Adhikari',
      status: 'Hello there, I am using WhatsApp',
      time: '8:02 AM',
      imageUrl: 'https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_27.png',
    },
    {
      uid: 5,
      name: 'Prashant Thapa',
      status: 'Hello there, I am using Facebook',
      time: 'Mon',
      imageUrl: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/vibrent_23.png',
    },
    {
      uid: 2,
      name: 'Anish Gurung',
      status: 'Hello there, I am using Facebook',
      time: 'Now',
      imageUrl: 'https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_18.png',
    },
    {
      uid: 7,
      name: 'Dolbatti Shrestha',
      status: 'Hello there, I am using Instagram',
      time: '9:10 AM',
      imageUrl: 'https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_1.png',
    },
    {
      uid: 8,
      name: 'Dibya Kumari',
      status: 'Hello there, I am using Instagram',
      time: 'Yesterday',
      imageUrl: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/vibrent_26.png',
    },
    {
      uid: 9,
      name: 'Sagar Adhikari',
      status: 'Hello there, I am using WhatsApp',
      time: '7:58 AM',
      imageUrl: 'https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_27.png',
    },
    {
      uid: 10,
      name: 'Anish Gurung',
      status: 'Hello there, I am using Facebook',
      time: 'Tue',
      imageUrl: 'https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_18.png',
    },
    {
      uid: 11,
      name: 'Dolbatti Shrestha',
      status: 'Hello there, I am using Instagram',
      time: '10:12 AM',
      imageUrl: 'https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_1.png',
    },
    {
      uid: 13,
      name: 'Dibya Kumari',
      status: 'Hello there, I am using Instagram',
      time: 'Yesterday',
      imageUrl: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/vibrent_26.png',
    },
    {
      uid: 14,
      name: 'Sagar Adhikari',
      status: 'Hello there, I am using WhatsApp',
      time: '8:00 AM',
      imageUrl: 'https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_27.png',
    },
  ];
  return (
    <View style={styles.container}> 
      
      <ScrollView
      showsVerticalScrollIndicator ={false}
      
      
      scrollEnabled={true}
>
        {contacts.map(({uid,name,status, time,imageUrl}) => (
            <View key={uid} style={styles.userCard}>
                <Image 
                source={{
                    uri: imageUrl

                }}
                
                 style={styles.userImage}
                 />
                 <View style={styles.textContainer}>
                  <Text style={styles.userName}>{name}</Text>
                  <View style={styles.statusRow}>
                    <Text style={styles.status}>{status}</Text>
                   <Text style={styles.time}>{time}</Text>

                  </View>
                  
                 </View>
                 
                 
                 
                 
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
  status:{
    fontSize: 12,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 4,

  },
  textContainer:{
    flexDirection: 'column',
    justifyContent: 'center',
  },
  userCard:{
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
   
   
  },

  userImage: {
    
    width: 60,

    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  time:{
    
    fontSize: 10,
    color: 'gray',
    textAlign: 'center',
    marginLeft: 82,

  },
  statusRow:{
     flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  
});