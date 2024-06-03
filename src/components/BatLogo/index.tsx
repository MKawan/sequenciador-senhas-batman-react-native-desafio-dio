import React from 'react';
import { View, Text, Image} from 'react-native';

import {styles} from './styles';
import logoBatman from '../../assets/img/bat-logo.png'

const BatLogo = () => {
  return (
    <View>
        <Text style={styles.title}>BAT PASS GENERATOR</Text>
      <Image source={logoBatman}
      style={{
        resizeMode: 'contain',
        height: 180
      }}
      />
    </View>
  )
}

export default BatLogo