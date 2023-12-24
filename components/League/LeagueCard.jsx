// LeagueCard.js
import React from "react";
import { View, Image, StyleSheet } from "react-native";

const LeagueCard = ({ emblemUri, children }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.emblem} source={{ uri: emblemUri }} />
      <View style={styles.textContainer}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  emblem: {
    width: 100,
    height: 100,
    marginRight: 16,
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
  },
});

export default LeagueCard;
