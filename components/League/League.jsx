import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import axios from "axios";
import LeagueCard from "./LeagueCard";
import LeagueDetails from "./LeagueDetails";
import { useRoute } from "@react-navigation/native";
import MatchList from "./MatchList";

const League = () => {
  const [league, setLeague] = useState(null);
  const [leagueMatches, setLeagueMatches] = useState(null);
  const [loading, setLoading] = useState(true);

  const route = useRoute();
  const { leagueCode, leagueId } = route.params;

  useEffect(() => {
    const fetchLeague = async () => {
      const baseUrl = "http://localhost:3000";
      try {
        const response = await axios(`${baseUrl}/leagues/${leagueCode}`);
        setLeague(response.data);
      } catch (error) {
        console.error("Error fetching league:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchLeagueMatches = async () => {
      const baseUrl = "http://localhost:3000";
      try {
        const response = await axios(`${baseUrl}/league-matches/${leagueId}`);
        console.log("response.data >>> ", response.data);
        setLeagueMatches(response.data.matches);
      } catch (error) {
        console.error("Error fetching league:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchLeague();
    fetchLeagueMatches();
  }, []);

  return (
    <SafeAreaView>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          <LeagueCard emblemUri={league.emblem}>
            <LeagueDetails league={league} />
          </LeagueCard>

          <Text>Matches</Text>
          <MatchList matches={leagueMatches} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default League;
