import { FlatList, Image, Pressable, StyleSheet, Text, View, TextInput} from "react-native";
import React from "react";
import { useState } from "react";


const Screen2 = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
          <View style={styles.Header}>
              <Image style={styles.avatar}
                     source={route.params?.image}
              />
              <View>
              <Text style={styles.title1}>{route.params?.title}</Text>
              <Text style={styles.description1}>{route.params?.description}</Text>
              </View>
          </View>

          <View style={styles.Input}>
            <Image style={styles.iconSearch}
                   source={require("../assets/btnSearch.png")}
            />
           <TextInput style={styles.SetInput} placeholder="Search"/>
          </View>

          <View style={{top: 100}}>
            <Pressable style={styles.btnTask}>
              <Image style={styles.iconCheck}
                     source={require("../assets/check.png")}
              />
              <Text style={styles.txtTask}>To check email</Text>
              <Image style={styles.iconNote}
                     source={require("../assets/note.png")}
              />
            </Pressable>
          </View>

          <View style={{top: 120}}>
            <Pressable style={styles.btnTask}>
              <Image style={styles.iconCheck}
                     source={require("../assets/check.png")}
              />
              <Text style={styles.txtTask}>UI task web page</Text>
              <Image style={styles.iconNote2}
                     source={require("../assets/note.png")}
              />
            </Pressable>
          </View>

          <View style={{top: 140}}>
            <Pressable style={styles.btnTask}>
              <Image style={styles.iconCheck}
                     source={require("../assets/check.png")}
              />
              <Text style={styles.txtTask}>Learn javascript basic</Text>
              <Image style={styles.iconNote3}
                     source={require("../assets/note.png")}
              />
            </Pressable>
          </View>

          <View style={{top: 160}}>
            <Pressable style={styles.btnTask}>
              <Image style={styles.iconCheck}
                     source={require("../assets/check.png")}
              />
              <Text style={styles.txtTask}>Learn HTML Advance</Text>
              <Image style={styles.iconNote4}
                     source={require("../assets/note.png")}
              />
            </Pressable>
          </View>

          <View style={{top: 180}}>
            <Pressable style={styles.btnTask}>
              <Image style={styles.iconCheck}
                     source={require("../assets/check.png")}
              />
              <Text style={styles.txtTask}>Medical App UI</Text>
              <Image style={styles.iconNote5}
                     source={require("../assets/note.png")}
              />
            </Pressable>
          </View>

          <View style={{top: 200}}>
            <Pressable style={styles.btnTask}>
              <Image style={styles.iconCheck}
                     source={require("../assets/check.png")}
              />
              <Text style={styles.txtTask}>Learn Java</Text>
              <Image style={styles.iconNote6}
                     source={require("../assets/note.png")}
              />
            </Pressable>
          </View>
          <Pressable  onPress={() => navigation.navigate("Screen3")}>
           <Image style={styles.imgAdd}
                   source={require("../assets/btnAdd.png")}
            />
        </Pressable>
          
        </View>
      );
    };

export default Screen2;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
    },
    Header:{
      flexDirection: 'row',

    },
    avatar:{
      width: "50px", 
      height: "50px", 
      resizeMode: "contain", 
      marginTop:50,
      borderRadius: 50,
    },
    title1:{
      fontFamily: "Epilogue",
      fontSize: 20,
      fontWeight: 700,
      lineHeight: 30,
      textAlign: "center",
      top: 50,
      color: '#171A1F'
    },
    description1:{
      fontFamily: "Epilogue",
      fontSize: 14,
      fontWeight: 700,
      lineHeight: 22,
      textAlign: "center",
      top: 50,
      left: 25,
      color: 'gray',
    },
    Input:{
      top: 40,
      flexDirection: 'row',
      borderRadius: "3px",
      border: "1px solid #C4C4C4",
      backgroundColor: "rgba(196, 196, 196, 0.10)",
      width: "334px",
      height: "44px",
      fontSize: "16px",
      color: "rgba(0, 0, 0, 0.30)",
      fontWeight: 700,
      paddingLeft: "8px",
    },
    iconSearch:{
      width: 35,
      height: 35,
      top: 3,
    },
    SetInput:{
      fontFamily: 'Inter',
      fontSize: 17,
      fontWeight: 400,
      lineHeight: 22,
      textAlign: "left",
      width: "304px",
      height: "44px",
    },
    btnTask:{
      flexDirection: 'row',
      width: 335,
      height: 48,
      borderRadius: 24,
      backgroundColor: "rgba(222, 225, 230, 0.47)",
      boxShadow: "0px 8px 17px 0px rgba(23, 26, 31, 0.15), 0px 0px 2px 0px rgba(23, 26, 31, 0.12)",

    },
    txtTask:{
      fontFamily: 'Inter',
      fontSize: 16,
      fontWeight: 700,
      lineHeight: 26,
      textAlign: "left",
      left: 50,
      top: 10
      
    },
    iconCheck:{
      width: 24,
      height: 24,
      left: 20,
      top: 10
    },
    iconNote:{
      width: 24,
      height: 24,
      top: 10,
      left: 170,
    },
    iconNote2:{
      width: 24,
      height: 24,
      top: 10,
      left: 155,
    },
    iconNote3:{
      width: 24,
      height: 24,
      top: 10,
      left: 117,
    },
    iconNote4:{
      width: 24,
      height: 24,
      top: 10,
      left: 117,
    },
    iconNote5:{
      width: 24,
      height: 24,
      top: 10,
      left: 160,
    },
    iconNote6:{
      width: 24,
      height: 24,
      top: 10,
      left: 190,
    },
    imgAdd:{
      width: 69,
      height: 69,
      top: 250,
    }
});