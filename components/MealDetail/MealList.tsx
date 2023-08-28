import React from "react"; // Don't forget to import React
import { View, Text, StyleSheet } from "react-native";

type Props = { data: string[] | undefined };

const MealList: React.FC<Props> = (props) => {
  if (!props.data) {
    return <Text>No item</Text>;
  }

  return (
    <>
      {props.data.map((dataPoint) => (
        <View style={styles.listItem} key={dataPoint}>
          <Text style={styles.itemText}>{dataPoint}</Text>
        </View>
      ))}
    </>
  );
};

export default MealList;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#9b5607",
    textAlign: "center",
  },
});
