import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./img/background.png')} style={styles.image}>

        <View style={styles.viewLogo}>
          <Image style={styles.logo}
            source={require('./img/Ellipse 8.png')} 
          />
        </View> 

        <View style={styles.viewTitle} >

        <Text style={styles.title1}>GROW {"\n"}YOUR BUSINESS</Text>

          <Text style={styles.title2}>We will help you to grow your business using online server</Text>


        </View>

        <View style={styles.viewButton} >
          <Button  
            title=' LOGIN '
            color= '#E3C000'   
          />
          <Button 
            title='SIGN UP' 
            color= '#E3C000'
          />
        </View>

      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    viewLogo: {
      marginTop: 20,
    },
    logo: {
      width: 150,
      height: 150,
    },
    viewTitle: {
      marginTop: 80,
    },
    title1: {
      textAlign: "center",
      fontSize: 25,
      fontWeight: 700,

      height: 100,

    },
    title2: {
      alignItems: 'column',
      fontSize: 15,
      fontWeight: 700,
      height: 50,
    },
    viewButton: {
      fontWeight: 'bold',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '60%',
      height: 40,
    },
   
});