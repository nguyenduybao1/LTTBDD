import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import { useEffect, useState } from 'react';

function Screen1({ navigation, route}) {
  const [data, setData] = useState([]);
    const [text, setText] = useState("");
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        const resp = await fetch('https://6544afaf5a0b4b04436cbf23.mockapi.io/toDo');
        const data = await resp.json();
        setData(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);
  return(
    <View style={styles.container}>
      <View>
        <Image style={styles.ImgHeader} 
              source={require("../Tuan8/assets/Image 92.png")}
        />
      </View>
      <Text style={styles.Title}>MANAGE YOUR<br/>TASK</Text>
      <View style={styles.TextInput}>
        <Image style={styles.imgInput} 
               source={require("../Tuan8/assets/seeMore.png")}
        />
        <TextInput onChangeText={setText} value={text} style={styles.inputName} placeholder='Enter your name' />
      </View>
        <Pressable style={styles.Setbtn} onPress={() => {
                    data.map((item)=>{
                        if(text===item.name){
                            navigation.navigate("Screen2",item)}
                    })
                }}>
          <Text style={styles.txtbtn}>GET STARTED →</Text>
        </Pressable>
    </View>
  )
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  ImgHeader:{
    width: 271,
    height: 271,
    top: 60,
  },
  Title:{
    width: 390,
    height: 72,
    top: 100,
    fontFamily: 'Epilogue',
    fontSize: 24,
    fontWeight: 700,
    lineHeight: 36,
    textAlign: 'center',
    color: '#8353E2',
  },
  TextInput:{
    flexDirection: 'row',
    width: 334,
    height: 43,
    top: 130,
    borderRadius: 12,
    border: "1px solid #9095A0",
    backgroundColor: "rgba(0, 0, 0, 0.00)",
    
  },
  imgInput:{
    width: 20,
    height: 20,
    top: 12,
    left: 16,
  },
  inputName:{
    marginLeft: 30,
    width: 300,
    height: 43,
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 26,
    textAlign: 'left',
  },
  Setbtn:{
    width: 190,
    height: 44,
    top: 160,
    padding: 10,
    borderRadius: 12,
    backgroundColor: '#00BDD6',
  },
  txtbtn:{
    width: 128,
    height: 26,
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 26,
    left: 25,
    color: '#FFFFFF',
  }
});
