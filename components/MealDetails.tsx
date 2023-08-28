import { View, Text, StyleSheet } from "react-native";

type Props = {
  duration: number | undefined;
  complexity: string | undefined;
  affordability: string | undefined;
  textStyle?: {};
};

const MealDetails = (props: Props) => {
  return (
    <View style={styles.details}>
      <Text style={[styles.detailItem, props.textStyle]}>
        {props.duration}m
      </Text>
      <Text style={[styles.detailItem, props.textStyle]}>
        {props.complexity?.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, props.textStyle]}>
        {props.affordability?.toLocaleUpperCase()}
      </Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
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
