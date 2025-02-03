import { StyleSheet, Button, Alert, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#feeaae', '#e9c47b', '#d69225']}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.8, y: 1 }}
        locations={[0.0, 0.3, 0.8]}
      >
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Send Notification" onPress={() => Alert.alert("Button Pressed")} />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
  },
  button: {
    width: '100%'
  }
});
