import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import React from 'react';

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={['#feeaae', '#e9c47b', '#da9d3c']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.8, y: 1 }}
      locations={[0.0, 0.5, 0.8]}
    >
      {/* HEADER */}
      <View style={styles.header}>
        {/* <Text style={styles.headerText}>Welcome to BeerTracker</Text> */}
      </View>

      {/* BODY */}
      <View style={styles.body}>
        <Image
          source={require('../../assets/images/home/biertje_doen_512x512.png')}
          style={styles.beerIcon}
        />
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.imageButton}>
          <Image
            source={require('../../assets/images/home/notify_button_512x256.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
        <Text style={styles.bottomText}>Press to notify your friends!</Text>
        <Text style={styles.linkText}>Beertracker.nl</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: responsiveFontSize(4),
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Rockabilly',
  },
  body: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  beerIcon: {
    width: responsiveWidth(98),
    height: responsiveHeight(38),
    marginBottom: 100,
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageButton: {
    alignItems: 'center',
    marginLeft: 22,
    marginBottom: 20,
  },
  buttonImage: {
    width: responsiveWidth(95),
    height: responsiveHeight(15),
  },
  bottomText: {
    fontSize: responsiveFontSize(4),
    fontWeight: 'bold',
    textShadowColor: '#fff',
    textShadowRadius: 5,
    fontFamily: 'Rockabilly',
    letterSpacing: 2,
    color: '#000',
  },
  linkText: {
    fontSize: responsiveFontSize(2.5),
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Rockabilly',
    letterSpacing: 2,
    textShadowColor: '#000',
    textShadowRadius: 5,
  },
});
