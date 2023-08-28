import { View, Text, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../type_utilities/types"; // Import the RootStackParamList type

type MealsOverviewScreenRouteProp = RouteProp<
  RootStackParamList,
  "MealsOverview"
>;

interface MealsOverviewScreenProps {
  route: MealsOverviewScreenRouteProp;
}

const MealsOverviewScreen: React.FC<MealsOverviewScreenProps> = ({ route }) => {
  const { categoryId } = route.params;

  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen - {categoryId}</Text>
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
