import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./assets/messy-kids-logo.png')}/>
      <StatusBar style="auto" />
      <TouchableOpacity  style={styles.button} title="Activities" onPress={() => navigation.navigate('Activities')}>
        <Text style={styles.titleFont}>
          Activities
        </Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.button}>
        <Text style={styles.titleFont}>
          Favourites
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function Activities({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Activities</Text>
      <Button
        title="Go to Activities... again"
        onPress={() => navigation.push('Activities')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}


const Stack = createStackNavigator();


export default function App() {
  let [fontsLoaded] = useFonts({
    'Quicksand-Light': require('./assets/fonts/Quicksand-Light.ttf'),
    'Quicksand-Bold': require('./assets/fonts/Quicksand-Bold.ttf'),
    'Quicksand-Medium': require('./assets/fonts/Quicksand-Medium.ttf'),
    'Quicksand-Regular': require('./assets/fonts/Quicksand-Regular.ttf'),
    'Quicksand-SemiBold': require('./assets/fonts/Quicksand-SemiBold.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    return (
      <NavigationContainer >
        <Stack.Navigator screenOptions={{ headerShown: false }} >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Activities" component={Activities} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFECF9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 400,
    height: 400,
    marginTop: 10,
    marginLeft: 25
  },
  button: {
    width: 350,
    height: 75,
    backgroundColor: '#f2dced',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    borderColor: 'black',
    borderWidth: 2,
    marginTop: 50,
    marginBottom: 20,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 3, width: 3 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 5, // Android
  },
  titleFont: {
    fontSize: 50,
    fontFamily: 'Quicksand-Regular',
    paddingBottom: 10,
  }
});
