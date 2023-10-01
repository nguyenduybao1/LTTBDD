import {View,Text,StyleSheet,SafeAreaView,TouchableOpacity} from "react-native";
import React from "react";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.textHeader}>CODE</Text>
        <Text style={styles.textIn}>VERIFICATION</Text>
        <Text style={styles.textDes}>Enter ontime password sent on ++849092605798</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.box}/>
          <View style={styles.box}/>
          <View style={styles.box}/>
          <View style={styles.box}/>
          <View style={styles.box}/>
          <View style={styles.box}/>
        </View>
        <TouchableOpacity style={styles.buttonCode}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 18,
              fontWeight: 700,
              lineHeight: "normal",
              marginTop: 12,
            }}
          >
            VERIFY CODE
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    width: 360,
    height: 640,
    backgroundColor: "transparent",
    backgroundImage:
      "linear-gradient(180deg, #C7F4F6 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #00CCF9 100%)",
    alignItems: "center",
  },
  textHeader: {
    textAlign: "center",
    fontSize: 60,
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    marginTop: 111,
  },
  textIn: {
    textAlign: "center",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    marginTop: 60,
  },
  textDes: {
    width: 302,
    height: 53,
    textAlign: "center",
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
    marginTop: 20,
  },
  box: {
    width: 50,
    height: 50,
    border: "1px solid #000",
    background: "rgba(196, 196, 196, 0.00)",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  },
  buttonCode: {
    width: 339,
    height: 50,
    backgroundColor: "#E3C000",
    marginTop: 47,
  },
});

