import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";

const Screen3 = ({ navigation, route }) => {
  const [text, setText] = React.useState("");

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

      <Text style={styles.addJob}>ADD YOUR JOB</Text>

      <View style={styles.inputTask}>
        <Image
          style={{ width: 20, height: 20 }}
          source={require("../assets/iconTask.png")}
        />
        <TextInput
          onChangeText={setText}
          value={text}
          placeholder="Input your job"
        ></TextInput>
      </View>

      <Pressable onPress={() => {navigation.navigate("Screen2");}}
        style={styles.btnFinish}>
        <Text style={styles.txtFinish}>Finish</Text>
      </Pressable>

      <Image
        style={styles.imgBottom}
        source={require("../assets/Image 92.png")}
      />
    </View>
  );
};

export default Screen3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inputTxt: {
    display: "flex",
    padding: 9,
    flexDirection: "row",
    gap: 8,
    width: 334,
    height: 43,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#9095A0",
    backgroundColor: "rgba(0, 0, 0, 0.00)",
    marginTop: 60,
    alignSelf: "center",
  },
  addJob:{
    textAlign: "center", 
    fontSize: 32, 
    fontWeight: "700" 
  },
  btnFinish:{
    width: 190,
    height: 44,
    borderRadius: 12,
    backgroundColor: "#00BDD6",
    alignItems: "center",
    paddingTop: 10,
    marginTop: 32,
          alignSelf: "center",
  },
  txtFinish:{
    textAlign: "center",
    color: "#fff",
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: 400,
  },
  imgBottom:{
    width: 190,
    height: 170,
    alignSelf: "center",
    marginTop: 50,
  }
});