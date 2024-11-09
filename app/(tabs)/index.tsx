import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from '@/components/Card'

const index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.txt}>kareemapp</Text>
        <Text style={styles.txt1}>28December2004</Text>
        <Text style={styles.txt2}>My first ui</Text>
      </View>
<Card name='Kareem' years='2004'/>
<Card name='KAREEM' years='20'/>

    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'azure',
    paddingTop: 45,
    padding: 10
  },
  txt: {
    color: 'blue',
    fontSize: 25 ,
    marginLeft: 60,
  },
  txt1: {
    color: 'green',
    fontSize: 25,
    marginLeft: 60,
  },
  txt2: {
    color: 'red',
    fontSize: 46,
    marginLeft: 100,
    paddingBottom: 200
  },
  card: {
    borderWidth: 15,
    width:380,
    height: 300
    
  },
})