import {SafeAreaView,Text,StyleSheet,View,TextInput,Image,TouchableOpacity} from "react-native";
import React from "react";
import { useState } from "react";

export default function App() {
  const [name, setName]=useState("");
  const [password, setPassword]=useState("");
  const onChangeName = (text) => {
    setName(text);
  };
  const onChangePassword = (text) => {
    setPassword(text);
  };

  const onClick = () => {
    if (name === "" || password === "") {
      return alert("Vui long nhap day du thong tin");
    } else if (name === "admin" && password === "admin") {
      alert("Dang nhap thanh cong");
      return alert("Name: " + name + "\nPassword: " + password);
    } else {
      return alert("Dang nhap that bai");
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text
          style={{
            fontSize: "30px",
            fontWeight: 700,
            right: 130,
            marginTop: "82px",
          }}
        >LOGIN</Text>
        <View style={styles.InputName}>
          <Image
            style={{ width: "32px", height: "32px" }}
            source={require("../2a/assets/avatar_user 1.png")}
          />
          <TextInput style={styles.txtName} 
                     onChangeText={setName}
                     placeholder="Name" />
        </View>
        <View style={styles.InputPassword}>
          <Image
            style={{ width: "32px", height: "32px" }}
            source={require("../2a/assets/lock-152879 1.png")}
          />
          <TextInput style={styles.txtPass}
                     secureTextEntry={true} 
                     onChangeText={setPassword}
                     placeholder="Password" />
          <Image
            style={{ width: "32px", height: "32px" }}
            source={require("../2a/assets/eye 1.png")}
          />
        </View>
        <TouchableOpacity style={styles.btnLogin} onPress={onClick}>
          <Text style={{ fontSize: "20px", fontWeight: 700, color: "#fff" }}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: "20px", fontWeight: 700, marginTop: "45px" }}>Forgot your password?</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "360px",
    height: "640px",
    backgroundImage: "linear-gradient(180deg, #FBCB00 0%, #BF9A00 100%)",
    alignItems: "center",
  },
  InputName: {
    width: 330,
    height: 54,
    border: "1px solid var(--Gray-6, #F2F2F2)",
    backgroundColor: "rgba(196, 196, 196, 0.30)",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "75px",
  },
 InputPassword: {
    width: 330,
    height: 54,
    border: "1px solid var(--Gray-6, #F2F2F2)",
    backgroundColor: "rgba(196, 196, 196, 0.30)",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "18px",
  },
  txtName: {
    width: 330,
    height: 54,
    paddingLeft: 20,
    fontSize: 18,
    fontWeight: 400,
  },
  txtPass: {
    width: 330,
    height: 54,
    paddingLeft: 20,
    fontSize: 18,
    fontWeight: 400,
  },
  btnLogin: {
    width: "330px",
    height: "45px",
    borderRadius: "2px",
    backgroundColor: "#060000",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "59px",
  },
});

