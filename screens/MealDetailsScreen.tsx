import {
  useLayoutEffect,
  // useContext
} from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useSelector, useDispatch } from "react-redux";

import { RootStackParamList } from "../type_utilities/types";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import MealList from "../components/MealDetail/MealList";
import IconButton from "../components/IconButton";
import { addFavorite, removeFavorite } from "../store/redux/favorites";
// import { FavoritesContext } from "../store/context/favorites-context";

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
  // const favoriteMealsCtx = useContext(FavoritesContext);

  const dispatch = useDispatch();

  const favoriteMealsIds = useSelector(
    (state: {
      favoriteMeals: {
        ids: string[];
      };
    }) => state.favoriteMeals.ids
  );

  const mealId = props.route.params.mealId;

  const selectedMeal = MEALS.find((item) => item.id === mealId);

  // const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);
  const mealIsFavorite = favoriteMealsIds.includes(mealId);

  const changeFavoriteStatusHandler = () => {
    if (mealIsFavorite) {
      // favoriteMealsCtx.removeFavorite(mealId);
      dispatch(removeFavorite({ id: mealId }));
    } else {
      // favoriteMealsCtx.addFavorite(mealId);
      dispatch(addFavorite({ id: mealId }));
    }
  };

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: selectedMeal?.title,
      headerRight: () => (
        <IconButton
          icon={mealIsFavorite ? "star" : "star-outline"}
          color="white"
          onPress={changeFavoriteStatusHandler}
        />
      ),
    });
  }, [selectedMeal, props.navigation, changeFavoriteStatusHandler]);

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
