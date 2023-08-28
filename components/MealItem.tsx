import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../type_utilities/types";
import MealDetails from "./MealDetails";

type MealDetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "MealDetails"
>;

type Props = {
  mealId: string;
  title: string;
  imageUrl: string;
  duration: number;
  complexity: string;
  affordability: string;
};

const MealItem = (props: Props) => {
  const navigation = useNavigation<MealDetailsScreenNavigationProp>();

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={
          ({ pressed }) => (pressed ? styles.buttonPressed : null) //IOS
        }
        onPress={() => {
          navigation.navigate("MealDetails", { mealId: props.mealId });
        }}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: props.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{props.title}</Text>
          </View>
          <MealDetails
            duration={props.duration}
            complexity={props.complexity}
            affordability={props.affordability}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",

    //android
    elevation: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible", //To show shadow on IOS

    //IOS
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    padding: 8,
  },
});
