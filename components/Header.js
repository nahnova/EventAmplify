import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Bold, ChevronLeft } from "react-native-feather";

const Header = ({ title, subtitle, hasBackButton }) => {
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
            <Text style={{ marginTop: 8, fontSize: 16, color: "#000000" }}>
              {subtitle}
            </Text>
          )}
        </View>
      </View>
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
});
