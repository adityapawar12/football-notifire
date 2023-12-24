import { useEffect, useState } from "react";
import { SafeAreaView, Text } from "react-native";
import axios from "axios";
import LeaguesGrid from "./LeaguesGrid";

const Leagues = () => {
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    const fetchLeagues = async () => {
      const baseUrl = "http://localhost:3000";
      const response = await axios(`${baseUrl}/leagues`);

      setLeagues(response.data.competitions);
    };

    fetchLeagues();
  }, []);

  return (
    <SafeAreaView>
      <LeaguesGrid data={leagues} />
    </SafeAreaView>
  );
};

export default Leagues;
