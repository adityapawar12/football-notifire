import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Leagues from "./Leagues/Leagues";
import League from "./League/League";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Leagues">
        <Stack.Screen name="Leagues" component={Leagues} />
        <Stack.Screen name="League" component={League} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
