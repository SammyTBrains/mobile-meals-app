import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

type Props = {
  title: string;
  imageUrl: string;
  duration: number;
  complexity: string;
  affordability: string;
};

const MealItem = (props: Props) => {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={
          ({ pressed }) => (pressed ? styles.buttonPressed : null) //IOS
        }
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: props.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{props.title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{props.duration}m</Text>
            <Text style={styles.detailItem}>
              {props.complexity.toUpperCase()}
            </Text>
            <Text style={styles.detailItem}>
              {props.affordability.toLocaleUpperCase()}
            </Text>
          </View>
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
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});