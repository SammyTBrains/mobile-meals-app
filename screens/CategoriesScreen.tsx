import { FlatList } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import { RootStackParamList } from "../type_utilities/types"; // Import the RootStackParamList type from App.tsx

type CategoriesScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "MealsCategories"
>;

type Props = {
  navigation: CategoriesScreenNavigationProp;
};

const CategoriesScreen = (props: Props) => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <CategoryGridTile
          title={itemData.item.title}
          color={itemData.item.color}
          onPress={() => {
            props.navigation.navigate("MealsOverview", {
              categoryId: itemData.item.id,
            });
          }}
        />
      )}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
