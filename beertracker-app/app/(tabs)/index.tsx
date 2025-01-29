import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={['#feeaae', '#e9c47b' ,'#da9d3c']}
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 0.8, y: 1}}
      locations={[0.0, 0.5, 0.8]}
    >
      {/* Main content */}
      <View style={styles.mainContent}>
        {/* Beer icon */}
        <Image 
          source={require('../../assets/images/home/biertje_doen_512x512.png')}
          style={styles.beerIcon}
        />

        {/* Slider button */}
        <TouchableOpacity style={styles.imageButton}>
          <Image 
            source={require('../../assets/images/home/notify_button_512x256.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.bottomText}>Press to notify your friends!</Text>
        <Text style={styles.linkText}>Beertracker.nl</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  beerIcon: {
    marginTop: 100,
    width: 400,
    height: 256,
  },
  imageButton: {
    alignItems: 'center',
  },
  buttonImage: {
    width: 400,
    height: 110,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  bottomText: {
    fontSize: 20,
    fontWeight: 'bold',
    textShadowColor: '#fff',
    textShadowRadius: 5,
    fontFamily: 'Rockabilly',
    letterSpacing: 2,
    color: '#000',
  },
  linkText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Rockabilly',
    letterSpacing: 2,
    textShadowColor: '#000',
    textShadowRadius: 5,
    marginTop: 10,
  },
});
