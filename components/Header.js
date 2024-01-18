import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Bold, ChevronLeft } from "react-native-feather";

const Header = ({ title, subtitle, hasBackButton, rightComponent }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {hasBackButton && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ChevronLeft color="#000000" width={32} height={32} />
          </TouchableOpacity>
        )}
        <View style={{ marginLeft: 8 }}>
          <Text
            style={{
              marginTop: 8,
              fontSize: 24,
              color: "#000000",
              fontWeight: "bold",
            }}
          >
            {title}
          </Text>
          {subtitle && (
            <View style={styles.subtitleContainer}>
              <Text style={styles.subtitleText}>{subtitle}</Text>
            </View>
          )}
        </View>
      </View>
      {rightComponent && (
        <View style={{ marginLeft: "auto" }}>{rightComponent}</View>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  subtitleContainer: {
    maxWidth: 250, // Set your desired maximum width
    marginTop: 8,
  },
  subtitleText: {
    fontSize: 16,
    color: "#000000",
  },
});
