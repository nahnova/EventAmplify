import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

const ListItem = ({ title, description, date, time, photoUrl, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: photoUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        {description && <Text style={styles.description}>{description}</Text>}
        {date && time && (
          <Text style={styles.dateTime}>{`${date} ${time}`}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  image: {
    width: "30%",
    height: "100%",
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  description: {
    fontSize: 16,
    color: "#666",
    marginBottom: 4,
  },
  dateTime: {
    fontSize: 14,
    color: "#888",
  },
});
