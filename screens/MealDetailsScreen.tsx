import { useLayoutEffect } from "react";
import { View, Text } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../type_utilities/types";
import { MEALS } from "../data/dummy-data";

type MealDetailsScreenRouteProp = RouteProp<RootStackParamList, "MealDetails">;

type MealDetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "MealDetails"
>;

type Props = {
  route: MealDetailsScreenRouteProp;
  navigation: MealDetailsScreenNavigationProp;
};

const MealDetailsScreen = (props: Props) => {
  const mealId = props.route.params.mealId;

  useLayoutEffect(() => {
    const mealTitle = MEALS.find((item) => item.id === mealId)?.title;

    props.navigation.setOptions({
      title: mealTitle,
    });
  }, [mealId, props.navigation]);

  return (
    <View>
      <Text>Meal Details Screen - {mealId}</Text>
    </View>
  );
};

export default MealDetailsScreen;
