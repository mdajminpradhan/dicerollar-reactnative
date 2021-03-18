import React, { useState } from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar
} from 'react-native';

import DiceOne from './assets/dice1.png';
import DiceTwo from './assets/dice2.png';
import DiceThree from './assets/dice3.png';
import DiceFour from './assets/dice4.png';
import DiceFive from './assets/dice5.png';
import DiceSix from './assets/dice6.png';

const App = () => {

  const [uri, setUri] = useState(DiceThree);
  let randomNumber = Math.floor(Math.random() * 6) + 1;

  const playButtonTapped = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setUri(DiceOne);
        break;
    
      case 2:
        setUri(DiceTwo);
        break;
    
      case 3:
        setUri(DiceThree);
        break;
    
      case 4:
        setUri(DiceFour);
        break;
    
      case 5:
        setUri(DiceFive);
        break;
    
      case 6:
        setUri(DiceSix);
        break;
    
      default:
        setUri(DiceThree);
        break;
    }
  }

  return(
    <>
      <StatusBar backgroundColor="black" />
      <View style={styles.container}>
        <Image style={styles.image} source={uri} />
        <TouchableOpacity onPress={playButtonTapped}>
          <Text style={styles.gamePlayButton}>Play Game </Text>
        </TouchableOpacity>
      </View>
    </>
    )
}

export default App


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  image: {
    width: 120,
    height: 120,
  },
  gamePlayButton: {
    backgroundColor: 'dodgerblue',
    color: 'white',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20
  }
})