import React from 'react';
import {Pressable, View, Text} from 'react-native';
import {styled} from './styled';
import BatLogo from '../../BatLogo';
import { StatusBar } from 'expo-status-bar';
import BatInput from '../../BatInput';
import BatButton from '../../BatButton';

const Home = () => {
  return (
    <View style={styled.container}>
      <View style={styled.logoContainer}>
        <BatLogo/>
      </View>

      <View style={styled.inputContainer}>
        <BatButton/>
      </View>
      <StatusBar style="light" />
    </View>
    
  )
}

export default Home;