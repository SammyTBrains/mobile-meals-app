import { ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = { children: ReactNode };

const Subtitle = (props: Props) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{props.children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
