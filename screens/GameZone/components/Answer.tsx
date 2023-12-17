import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { IAnswer } from '../../../models/IAnswer'
import { Dispatch, SetStateAction, useState } from 'react'
import { useFonts } from 'expo-font'
interface PropsIAnswer {
  answer: IAnswer
  setIndex: Dispatch<SetStateAction<number>>
  setLoad: Dispatch<SetStateAction<boolean>>
  load: boolean
}
export const Answer = ({ answer, setIndex, setLoad, load }: PropsIAnswer) => {
  const [right, setRight] = useState(Boolean)
  const [lie, setLie] = useState(Boolean)
  // const [fontsLoaded, error] = useFonts({
  //   JostMedium: require('../../../assets/fonts/Jost-Medium.ttf')
  // })
  // if(!fontsLoaded && !error ){
  //   return null
  // }
  const SetIndex = () => {
    setIndex((prev) => prev + 1)
  }
  const Check = () => {
    if (answer.correct) {
      setRight(true)
    } else if (answer.correct == false) {
      setLie(true)
      console.log(lie)
    }
    setLoad(true)
    setTimeout(SetIndex, 1000)
  }
  return (
    <TouchableOpacity
      disabled={load}
      onPress={() => {
        Check()
      }}>
      <View
        style={
          right ? styles.contentRight : lie ? styles.contentLie : styles.content
        }>
        <Text style={styles.text}>{answer.answer}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  content: {
    padding: 15,
    marginTop:20,
    marginHorizontal:5,
    backgroundColor: '#fccf7c',
    textAlign: 'center',
    width:'auto',
    borderRadius: 15,
    alignItems: 'center',
  },
  contentRight: {
    padding: 15,
    marginBottom: 15,
    marginTop: 15,
    backgroundColor: 'green',
    paddingBottom: 25,
    textAlign: 'center',
    minWidth: 350,
    maxWidth: 390,
    borderRadius: 15,
    rowGap: 25,
  },
  contentLie: {
    padding: 15,
    marginBottom: 15,
    marginTop: 15,
    backgroundColor: 'red',
    paddingBottom: 25,
    textAlign: 'center',
    minWidth: 350,
    maxWidth: 390,
    borderRadius: 15,
    rowGap: 25,
  },
  text:{
    fontFamily:'JostMedium',
    color: '#1b1116',
    alignItems:'center'
  }
})
