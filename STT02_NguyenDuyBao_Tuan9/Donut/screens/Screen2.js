import { StyleSheet, Image, Text, View, FlatList} from "react-native";
import React, { useState } from "react";
import { Pressable } from "react-native";

const Screen2 = ({ navigation, route }) => {
  const [count, setCount] = useState(1);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={route.params.image} />
      <Text style={styles.name}>{route.params.name}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          {route.params.info}
        </Text>
        <Text style={styles.price}>
          ${route.params.price * count}
        </Text>
      </View>

      <View style={styles.deliveryContainer}>
        <Image
          style={styles.deliveryIcon}
          source={require("../assets/Vector.png")}
        />
        <Text style={styles.deliveryText}>
          Delivery in
        </Text>
      </View>

      <View style={styles.countContainer}>
        <Text style={styles.deliveryTime}>
          30 min
        </Text>
        <View style={styles.countButtons}>
          <Pressable
            onPress={() => {
              setCount(count - 1);
            }}
          >
            <Image
              style={styles.subtractionIcon}
              source={require("../assets/Subtraction.png")}
            />
          </Pressable>
          <Text style={styles.countText}>
            {count}
          </Text>
          <Pressable
            onPress={() => {
              setCount(count + 1);
            }}
          >
            <Image
              style={styles.additionIcon}
              source={require("../assets/Addition.png")}
            />
          </Pressable>
        </View>
      </View>

      <Text style={styles.restaurantInfoTitle}>
        Restaurants info
      </Text>
      <Text style={styles.restaurantInfoText}>
        Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.
      </Text>

      <Pressable
        onPress={() => {
          alert("Add to cart complete!!!");
          navigation.navigate("Home");
        }}
        style={styles.addToCartButton}
      >
        <Text style={styles.addToCartButtonText}>
          Add to cart
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  image: {
    width: 272,
    height: 278,
    resizeMode: "contain",
    alignSelf: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 27,
  },
  infoContainer: {
    flexDirection: "row",
    marginLeft: 30,
    marginTop: 5,
    alignItems: "center",
  },
  infoText: {
    color: "rgba(0, 0, 0, 0.54)",
    fontSize: 15,
    fontWeight: "700",
  },
  price: {
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 90,
  },
  deliveryContainer: {
    flexDirection: "row",
    marginTop: 21,
  },
  deliveryIcon: {
    width: 20,
    height: 20,
    marginLeft: 22,
  },
  deliveryText: {
    color: "rgba(0, 0, 0, 0.54)",
    fontSize: 15,
    fontWeight: "700",
    marginLeft: 8,
  },
  countContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  deliveryTime: {
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 40,
  },
  countButtons: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 170,
  },
  subtractionIcon: {
    width: 21,
    height: 21,
  },
  countText: {
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 10,
  },
  additionIcon: {
    width: 21,
    height: 21,
    marginLeft: 10,
  },
  restaurantInfoTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 27,
    marginTop: 20,
  },
  restaurantInfoText: {
    color: "rgba(0, 0, 0, 0.67)",
    fontSize: 15,
    fontWeight: "700",
    marginLeft: 27,
    marginTop: 10,
  },
  addToCartButton: {
    width: 316,
    height: 58,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.20)",
    backgroundColor: "#F1B000",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 56,
  },
  addToCartButtonText: {
    color: "#FFFDFD",
    fontSize: 25,
    fontWeight: "700",
  },
});

export default Screen2;
