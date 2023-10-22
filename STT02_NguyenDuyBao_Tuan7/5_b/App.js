import { StyleSheet, Text, Image, View, Pressable} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3"
function Screen1({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title} >A premium online store for sporter and their stylish choice</Text>
      <View style={styles.bg_item} >
        <Image style={styles.img} 
              source={require("../4_a/assets/bifour_-removebg-preview.png")}
        />
      </View>
      <Text style={styles.title2}>POWER BIKE<br/>SHOP</Text>
      <Pressable onPress={() => navigation.navigate("Screen2")}
                 style={styles.btnStarted}>
        <Text style={styles.txtStarted}>Get Started</Text>
      </Pressable>
    </View>
    
    );
  }

  const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 


const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',

  },
  title: {
    width: 351,
    height: 87,
    top: 61,
    textAlign: 'center',
    fontWeight: 400,
    fontSize: 26,
    lineHeight: 26,
    fontFamily: 'VT323',
  },
  bg_item:{
    width: 359,
    height: 388,
    top: 130,
    borderRadius: 50,
  },
  img:{
    width: 292,
    height: 270,
    left: 31,
  },
  title2:{
    width: 351,
    height: 61,
    marginTop: 50,
    fontFamily: 'Ubuntu',
    fontWeight: 700,
    fontSize: 26,
    lineHeight: 29.87,
    textAlign: 'center',
  },
  btnStarted: {
    width: 340,
    height: 50,
    borderRadius: 30,
    marginTop: 20,
    backgroundColor: 'red',
  },
  txtStarted:{
    marginTop: 10,
    color: "#F9F2F2", 
    fontSize: "20px", 
    fontWeight: 700 ,
    textAlign: 'center',
  }
});
