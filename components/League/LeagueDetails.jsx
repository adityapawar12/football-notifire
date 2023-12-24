// LeagueDetails.js
import React from "react";
import { Text, StyleSheet } from "react-native";

const LeagueDetails = ({ league }) => {
  return (
    <>
      <Text style={styles.leagueName}>{league.name}</Text>
      <Text style={styles.area}>{league.area.name}</Text>
      <Text style={styles.startDate}>
        Start Date: {league.currentSeason.startDate}
      </Text>
      <Text style={styles.endDate}>
        End Date: {league.currentSeason.endDate}
      </Text>
      {/* Add more details as needed */}
    </>
  );
};

const styles = StyleSheet.create({
  leagueName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  area: {
    fontSize: 16,
    marginBottom: 8,
  },
  startDate: {
    fontSize: 14,
    marginBottom: 4,
  },
  endDate: {
    fontSize: 14,
  },
});

export default LeagueDetails;
