import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";

const categories = [
  { name: "Bags", image: require("../assets/images/bag.jpeg") },
  { name: "Watch", image: require("../assets/images/watch.jpeg") },
  { name: "Shoes", image: require("../assets/images/shoes.jpeg") },
  { name: "Bags", image: require("../assets/images/bag.jpeg") },
  { name: "Watch", image: require("../assets/images/watch.jpeg") },
  { name: "Shoes", image: require("../assets/images/shoes.jpeg") },
  // Add more categories here
];

const TopCategories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Categories</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        {categories.map((category, index) => (
          <View key={index} style={styles.categoryContainer}>
            <Image source={category.image} style={styles.categoryImage} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24, // Equivalent to Tailwind's "mt-6"
    paddingHorizontal: 16, // Equivalent to Tailwind's "px-4"
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "black",
  },
  scrollView: {
    marginTop: 16,
  },
  categoryContainer: {
    marginRight: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 40,
    marginBottom: 20,
  },
});

export default TopCategories;
