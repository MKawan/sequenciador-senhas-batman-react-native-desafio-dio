import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { styles } from './styles'

interface BatInputProps{
  pass?: string
}
const BatInput = (props: BatInputProps) => {
  return (
    <TextInput
        style={styles.inputeger}
        placeholder='pass'
        value={props.pass}
    />
  )
}

export default BatInput