import { View, Text } from "react-native";

type Props = {
  title: string;
};

const MealItem = (props: Props) => {
  return (
    <View>
      <Text>{props.title}</Text>
    </View>
  );
};

export default MealItem;
