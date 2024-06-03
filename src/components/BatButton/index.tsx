import {Text, Pressable } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import BatInput from '../BatInput';
import GeneratorPass from '../../services/GeneratorPass';
import * as Clipboard from 'expo-clipboard';

const BatButton = () => {
    const [pass, setPass] = useState('');

    function handleGeneratorButton(){
        let generationToken = GeneratorPass();
        setPass(generationToken);
    }

    function handlerCopy(){
        Clipboard.setStringAsync(pass);
    }
  return (
    <> 
        {/* <Button
            title='CLICK AQUI'
            onPress={() => {console.log("ola")}}
            accessibilityLabel='click em mim'
            color='#831584'
        /> */}
        <BatInput pass={pass}/>

        <Pressable style={styles.button}
            onPress={handleGeneratorButton}
            >
            <Text style={styles.text}>🔥GNERATOR🔥</Text>
        </Pressable>
        <Pressable style={[styles.button, {backgroundColor: '#831584'}]}
            onPress={handlerCopy}
            >
            <Text style={styles.text}>⚡COPY⚡</Text>
        </Pressable>
    </>
  )
}

export default BatButton