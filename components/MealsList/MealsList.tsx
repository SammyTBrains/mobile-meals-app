import { View, FlatList, StyleSheet } from "react-native";

import MealItem from "./MealItem";

type Props = {
  items: {
    id: string;
    categoryIds: string[];
    title: string;
    affordability: string;
    complexity: string;
    imageUrl: string;
    duration: number;
    ingredients: string[];
    steps: string[];
    isGlutenFree: boolean;
    isVegan: boolean;
    isVegetarian: boolean;
    isLactoseFree: boolean;
  }[];
};

const MealsList = (props: Props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.items}
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

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
