import { StyleSheet, View, Alert, Button } from 'react-native'

export default function App() {

  const alert = () => {
    Alert.alert('Android - Blue or Black?', 'OK is blue on Expo Go, black built with EAS')
  }

  return (
    <View style={styles.container}>
      <Button title='Show Alert' onPress={alert} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
