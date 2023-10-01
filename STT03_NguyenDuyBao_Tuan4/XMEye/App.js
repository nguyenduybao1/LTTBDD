import {Image,SafeAreaView,StyleSheet,Text,TextInput,TouchableOpacity,View} from "react-native";
import React from "react";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          style={{ width: "112.188px", height: "107.199px" }}
          source={require("../XMEye/assets/eyeball-309797 1.png")}
        />
        <View style={styles.sectionInputN}>
          <Image
            style={{ width: "30px", height: "30px" }}
            source={require("../XMEye/assets/logoAvatar.png")}
          />
          <TextInput
            style={{
              color: "#C4C4C4",
              textAlign: "center",
              fontSize: "18px",
              fontWeight: 400,
            }}
            placeholder="Please input user name"
          />
        </View>
        <View
          style={{
            width: "300px",
            height: "1px",
            backgroundColor: "#C4C4C4",
            marginTop: "7px",
          }}
        />
        <View style={styles.sectionInputP}>
          <Image
            style={{ width: "30px", height: "30px" }}
            source={require("../XMEye/assets/logoLock.png")}
          />
          <TextInput
            style={{
              color: "#C4C4C4",
              textAlign: "center",
              fontSize: "18px",
              fontWeight: 400,
            }}
            placeholder="Please input password"
          />
        </View>
        <View
          style={{
            width: "300px",
            height: "1px",
            backgroundColor: "#C4C4C4",
            marginTop: "7px",
          }}
        />
        <TouchableOpacity style={styles.btnLogin}>
          <Text
            style={{
              color: "#FFF",
              textAlign: "center",
              fontSize: "18px",
              fontWeight: 400,
              marginTop: "10px",
            }}
          >
            LOGIN
          </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", gap: "100px", marginTop: "24px" }}>
          <Text style={styles.txt}>Register</Text>
          <Text style={styles.txt}>Forgot Password</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: "24px",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "62px",
              height: "1px",
              backgroundColor: "#0E18F5",
            }}
          />
          <Text style={styles.txt}>Other Login Methods</Text>
          <View
            style={{
              width: "62px",
              height: "1px",
              backgroundColor: "#0E18F5",
            }}
          />
        </View>
        <View style={{ flexDirection: "row", gap: "50px", marginTop: "24px" }}>
          <Image
            style={{ width: "74px", height: "74px" }}
            source={require("../XMEye/assets/logoAdd.png")}
          />
          <Image
            style={{ width: "74px", height: "74px" }}
            source={require("../XMEye/assets/logoWifi.png")}
          />
          <View
            style={{
              width: "74px",
              height: "74px",
              borderRadius: "10px",
              backgroundColor: "#3A579C",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{ width: "32px", height: "45px" }}
              source={require("../XMEye/assets/logoFB.png")}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "360px",
    height: "640px",
    alignItems: "center",
  },
  sectionInputN: {
    flexDirection: "row",
    right: 50,
    marginTop: "46px",
  },
  sectionInputP: {
    flexDirection: "row",
    right: 50,
    marginTop: "50px",
  },
  btnLogin: {
    width: "300px",
    height: "48px",
    backgroundColor: "#386FFC",
    borderRadius: "10px",
    marginTop: "50px",
  },
  txt: {
    textAlign: "center",
    fontSize: "18px",
    fontWeight: 400,
  },
});