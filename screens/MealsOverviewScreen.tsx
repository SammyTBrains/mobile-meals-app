import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";

import { RootStackParamList } from "../type_utilities/types"; // Import the RootStackParamList type
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

type MealsOverviewScreenRouteProp = RouteProp<
  RootStackParamList,
  "MealsOverview"
>;

type MealsOverviewScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "MealsOverview"
>;

type Props = {
  route: MealsOverviewScreenRouteProp;
  navigation: MealsOverviewScreenNavigationProp;
};

const MealsOverviewScreen = (props: Props) => {
  const { categoryId } = props.route.params;

  const displayedMeals = MEALS.filter(
    (item) => item.categoryIds.indexOf(categoryId) >= 0
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (item) => item.id === categoryId
    )?.title;

    props.navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, props.navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => {
          const item = itemData.item;
          const mealItemProps = {
            mealId: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
          };

          return <MealItem {...mealItemProps} />;
        }}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
