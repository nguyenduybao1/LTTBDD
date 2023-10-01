import {View,Text,StyleSheet,SafeAreaView,TextInput,Image,TouchableOpacity} from "react-native";
import React from "react";
import { RadioButton } from "react-native-paper";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text
          style={{
            textAlign: "center",
            fontSize: "25px",
            fontWeight: 700,
            marginTop: 53,
          }}
        >
          REGISTER
        </Text>
        <TextInput style={styles.txtName} placeholder="Name" />
        <TextInput style={styles.txtPhone} placeholder="Phone" />
        <TextInput style={styles.txtEmail} placeholder="Email" />
        <View style={styles.sectionPass}>
          <Image style={{ width: "38px", height: "36px" }}
                 source={require("../1e/assets/eye 1.png")} />
          <TextInput style={styles.txtPassword} placeholder="Password"></TextInput>
        </View>
        <TextInput style={styles.txtBirthday} placeholder="Birthday" />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            right: 80,
            marginTop: 16,
          }}
        >
          <RadioButton value="Male" />
          <Text style={{ textAlign: "center", fontSize: "18px", fontWeight: 400 }}>Male</Text>
          <RadioButton value="Famale" />
          <Text style={{ textAlign: "center", fontSize: "18px", fontWeight: 400 }}>Famale</Text>
        </View>
        <TouchableOpacity style={styles.btnRegister}>
          <Text
            style={{
              textAlign: "center",
              fontSize: "20px",
              fontWeight: 700,
              color: "#FFF",
            }}
          >
            REGISTER
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            textAlign: "center",
            fontSize: "14px",
            fontWeight: 400,
            marginTop: "10px",
          }}
        >
          When you agree to terms and conditions
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    backgroundColor: "rgba(49, 170, 82, 0.19)",
    width: "360px",
    height: "640px",
    alignItems: "center",
  },
  txtEmail: {
    width: 330,
    height: 54,
    border: "1px solid var(--Gray-6, #F2F2F2)",
    backgroundColor: "rgba(196, 196, 196, 0.30)",
    paddingLeft: 20,
    fontSize: 18,
    fontWeight: 400,
    marginTop: 16,
  },
  sectionPass: {
    width: 330,
    height: 54,
    border: "1px solid var(--Gray-6, #F2F2F2)",
    backgroundColor: "rgba(196, 196, 196, 0.30)",
    flexDirection: "row-reverse",
    alignItems: "center",
    marginTop: 16,
  },
  txtPassword: {
    width: 330,
    height: 54,
    paddingLeft: 20,
    fontSize: 18,
    fontWeight: 400,
  },
  txtName: {
    width: 330,
    height: 54,
    border: "1px solid var(--Gray-6, #F2F2F2)",
    backgroundColor: "rgba(196, 196, 196, 0.30)",
    paddingLeft: 20,
    fontSize: 18,
    fontWeight: 400,
    marginTop: 26,
  },
  txtPhone: {
    width: 330,
    height: 54,
    border: "1px solid var(--Gray-6, #F2F2F2)",
    backgroundColor: "rgba(196, 196, 196, 0.30)",
    paddingLeft: 20,
    fontSize: 18,
    fontWeight: 400,
    marginTop: 16,
  },
  txtBirthday: {
    width: 330,
    height: 54,
    border: "1px solid var(--Gray-6, #F2F2F2)",
    backgroundColor: "rgba(196, 196, 196, 0.30)",
    paddingLeft: 20,
    fontSize: 18,
    fontWeight: 400,
    marginTop: 16,
  },
  btnRegister: {
    width: "330px",
    height: " 45px",
    borderRadius: "2px",
    backgroundColor: "#E53935",
    marginTop: "16px",
    justifyContent: "center",
  },
});

