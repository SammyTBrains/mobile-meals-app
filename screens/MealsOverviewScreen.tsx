import { View, Text, StyleSheet, FlatList } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../type_utilities/types"; // Import the RootStackParamList type

import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

type MealsOverviewScreenRouteProp = RouteProp<
  RootStackParamList,
  "MealsOverview"
>;

type Props = {
  route: MealsOverviewScreenRouteProp;
};

const MealsOverviewScreen = (props: Props) => {
  const { categoryId } = props.route.params;

  const displayedMeals = MEALS.filter(
    (item) => item.categoryIds.indexOf(categoryId) >= 0
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => <MealItem title={itemData.item.title} />}
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
