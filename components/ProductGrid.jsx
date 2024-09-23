import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const products = [
  {
    title: "Lorem ipsum dolor sit amet consectetur4",
    price: "$16.00",
    originalPrice: "$20.00",
    discount: "-20%",
    image: require("../assets/images/b.jpg"),
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur5",
    price: "$16.00",
    originalPrice: "$20.00",
    discount: "-20%",
    image: require("../assets/images/c.jpg"),
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur5",
    price: "$16.00",
    originalPrice: "$20.00",
    discount: "-20%",
    image: require("../assets/images/d.jpg"),
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur5",
    price: "$16.00",
    originalPrice: "$20.00",
    discount: "-20%",
    image: require("../assets/images/e.jpg"),
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur5",
    price: "$16.00",
    originalPrice: "$20.00",
    discount: "-20%",
    image: require("../assets/images/f.jpg"),
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur5",
    price: "$16.00",
    originalPrice: "$20.00",
    discount: "-20%",
    image: require("../assets/images/g.jpg"),
  },
];

const ProductGrid = () => {
  return (
    <ScrollView style={styles.scrollView}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Women Top</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={require("../assets/images/heart.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={require("../assets/images/shopping-bag.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Product Grid */}
      <View style={styles.grid}>
        {products.map((product, index) => (
          <View key={index} style={styles.productCard}>
            <View style={styles.imageContainer}>
              <Image source={product.image} style={styles.productImage} />
              <View style={styles.discountBadge}>
                <Text style={styles.discountText}>{product.discount}</Text>
              </View>
              <View style={styles.iconContainer}>
                <TouchableOpacity style={styles.iconButton}>
                  <Image
                    source={require("../assets/images/heart.png")}
                    style={styles.icon}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.iconButton, styles.bagIcon]}>
                  <Image
                    source={require("../assets/images/shopping-bag.png")}
                    style={styles.icon}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                  <Image
                    source={require("../assets/images/gallery.png")}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.productTitle}>{product.title}</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.productPrice}>{product.price}</Text>
                <Text style={styles.originalPrice}>
                  {product.originalPrice}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 16,
    marginTop: 24,
    height: "auto",
  },
  headerContainer: {
    flexDirection: "row", // Align items horizontally
    justifyContent: "space-between", // Space between text and icons
    alignItems: "center", // Center vertically
    marginBottom: 6, // Add margin for spacing
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "black",
  },
  headerIcons: {
    flexDirection: "row", // Align icons horizontally
    gap: 3, // Space between icons
  },
  grid: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productCard: {
    width: "48%", // Adjust width to fit two items per row
    borderRadius: 8,
    marginBottom: 16,
    marginTop: 12,
  },
  imageContainer: {
    position: "relative",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 5,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  productImage: {
    width: "100%",
    height: 160, // Adjust height as needed
    borderRadius: 5,
  },
  discountBadge: {
    position: "absolute",
    top: 5,
    right: 5,
    zIndex: 1,
  },
  discountText: {
    color: "white",
    backgroundColor: "red",
    padding: 2,
    fontWeight: "bold",
    borderRadius: 5,
  },
  descriptionContainer: {
    padding: 2,
    paddingTop: 8,
    borderRadius: 8,
    marginTop: 8,
  },
  productTitle: {
    fontWeight: "400",
    fontSize: 15,
    color: "black",
    marginBottom: 4,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 6,
    gap: 7,
  },
  productPrice: {
    fontSize: 24,
    color: "black",
  },
  originalPrice: {
    fontSize: 18,
    textDecorationLine: "line-through",
    color: "pink",
  },
  iconContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 25,
    right: 3,
    paddingHorizontal: 4,
    gap: 6,
  },
  iconButton: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: 4,
    borderWidth: 1,
    borderColor: "#ccc",
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  bagIcon: {
    backgroundColor: "lightblue",
  },
  icon: {
    width: 16,
    height: 16,
  },
});

export default ProductGrid;
