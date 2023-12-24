import React, { useState } from "react";
import {
  FlatList,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const LeaguesGrid = ({ data }) => {
  const [subscribeButtonStyles, setSubscribeButtonStyles] = useState({
    backgroundColor: "#9376E0",
    borderColor: "white",
    borderWidth: 0,
  });
  const [subscribeButtonTextStyles, setSubscribeButtonTextStyles] = useState({
    color: "white",
  });

  const [visitButtonStyles, setVisitButtonStyles] = useState({
    backgroundColor: "white",
    borderColor: "#9376E0",
    borderWidth: 1,
  });
  const [visitButtonTextStyles, setVisitButtonTextStyles] = useState({
    color: "#9376E0",
  });

  const [pressedSubscribeId, setPressedSubscribeId] = useState(0);
  const [pressedVisitId, setPressedVisitId] = useState(0);

  const navigation = useNavigation();

  const handleSubscribePress = (item) => {
    setPressedSubscribeId(item.id);

    setSubscribeButtonStyles((prevStyles) => ({
      backgroundColor:
        prevStyles.backgroundColor === "#9376E0" ? "white" : "#9376E0",
      borderColor: prevStyles.borderColor === "white" ? "#9376E0" : "white",
      borderWidth: prevStyles.borderWidth === 0 ? 1 : 0,
    }));

    setSubscribeButtonTextStyles((prevStyles) => ({
      color: prevStyles.color === "white" ? "#9376E0" : "white",
    }));

    setTimeout(() => {
      setSubscribeButtonStyles((prevStyles) => ({
        backgroundColor:
          prevStyles.backgroundColor === "white" ? "#9376E0" : "white",
        borderColor: prevStyles.borderColor === "#9376E0" ? "white" : "#9376E0",
        borderWidth: prevStyles.borderWidth === 1 ? 0 : 1,
      }));

      setSubscribeButtonTextStyles((prevStyles) => ({
        color: prevStyles.color === "#9376E0" ? "white" : "#9376E0",
      }));
    }, 300);
  };

  const handleVisitPress = (item) => {
    setPressedVisitId(item.id);

    navigation.navigate("League", { leagueCode: item.code, leagueId: item.id });

    setVisitButtonStyles((prevStyles) => ({
      backgroundColor:
        prevStyles.backgroundColor === "white" ? "#9376E0" : "white",
      borderColor: prevStyles.borderColor === "#9376E0" ? "white" : "#9376E0",
      borderWidth: prevStyles.borderWidth === 1 ? 0 : 1,
    }));

    setVisitButtonTextStyles((prevStyles) => ({
      color: prevStyles.color === "#9376E0" ? "white" : "#9376E0",
    }));

    setTimeout(() => {
      setVisitButtonStyles((prevStyles) => ({
        backgroundColor:
          prevStyles.backgroundColor === "#9376E0" ? "white" : "#9376E0",
        borderColor: prevStyles.borderColor === "white" ? "#9376E0" : "white",
        borderWidth: prevStyles.borderWidth === 0 ? 1 : 0,
      }));

      setVisitButtonTextStyles((prevStyles) => ({
        color: prevStyles.color === "white" ? "#9376E0" : "white",
      }));
    }, 300);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image style={styles.logo} source={{ uri: item.emblem }} />
      <Text style={styles.name}>{item.name}</Text>
      <TouchableOpacity
        style={{ ...styles.buttonContainer, ...subscribeButtonStyles }}
        onPress={() => handleSubscribePress(item)}
      >
        <Text
          style={{
            ...styles.buttonText,
            ...subscribeButtonTextStyles,
          }}
        >
          Subscribe
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ ...styles.buttonContainer, ...visitButtonStyles }}
        onPress={() => handleVisitPress(item)}
      >
        <Text style={{ ...styles.buttonText, ...visitButtonTextStyles }}>
          Visit
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
    margin: 10,
  },
  itemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    margin: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 0,
    marginBottom: 10,
  },
  name: {
    textAlign: "center",
    height: 40,
  },
  buttonContainer: {
    marginTop: 10,
    paddingVertical: 8,
    borderRadius: 5,
    width: "100%",
  },
  buttonText: {
    textAlign: "center",
  },
});

export default LeaguesGrid;
