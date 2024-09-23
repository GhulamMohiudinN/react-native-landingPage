import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
} from "react-native";

const Header = () => {
  return (
    <ImageBackground
      source={require("../assets/images/a.jpg")}
      style={styles.headerContainer}
    >
      <View style={styles.innerContainer}>
        <TouchableOpacity>
          <Image
            source={require("../assets/images/left-arrow.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Category &gt; Cloths</Text>
        <TouchableOpacity>
          <Image
            source={require("../assets/images/search2.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.bottomText}>Fluffy jackets</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    justifyContent: "flex-end", // Aligns the bottom text
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
  icon: {
    width: 20,
    height: 20,
  },
  bottomText: {
    fontWeight: "bold",
    color: "white",
    textAlign: "start",
    marginTop: 50,
    fontSize: 55,
    paddingLeft: 10,
  },
});

export default Header;
