import { useLayoutEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../type_utilities/types";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import MealList from "../components/MealDetail/MealList";
import IconButton from "../components/IconButton";

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

  const selectedMeal = MEALS.find((item) => item.id === mealId);

  const headerButtonPressHandler = () => {
    console.log("Pressed!");
  };

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: selectedMeal?.title,
      headerRight: () => (
        <IconButton
          icon="star"
          color="white"
          onPress={headerButtonPressHandler}
        />
      ),
    });
  }, [selectedMeal, props.navigation]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal?.imageUrl }} />
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      <MealDetails
        duration={selectedMeal?.duration}
        complexity={selectedMeal?.complexity}
        affordability={selectedMeal?.affordability}
        textStyle={styles.detailsText}
      />
      <View style={styles.listContainerOuter}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <MealList data={selectedMeal?.ingredients} />
          <Subtitle>Steps</Subtitle>
          <MealList data={selectedMeal?.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: { marginBottom: 32 },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailsText: {
    color: "white",
  },
  listContainerOuter: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
