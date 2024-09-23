import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const CategoryButtons = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}
    >
      {["T-shirts", "Crop tops", "Blouses", "Pajamas", "Biknis"].map(
        (category, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.button,
              index === 0 ? styles.selectedButton : styles.defaultButton,
            ]}
          >
            <Text
              style={[
                styles.buttonText,
                index === 0 ? styles.selectedText : styles.defaultText,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        )
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 30,
    paddingHorizontal: 16,
  },
  button: {
    paddingHorizontal: 32,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 12,
  },
  selectedButton: {
    backgroundColor: "#6A5ACD", // Purple color
  },
  defaultButton: {
    backgroundColor: "#E0E0E0", // Gray color
  },
  buttonText: {
    fontSize: 14,
  },
  selectedText: {
    color: "white",
  },
  defaultText: {
    color: "black",
  },
});

export default CategoryButtons;
