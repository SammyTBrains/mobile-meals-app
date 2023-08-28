import { Pressable, Text, View } from "react-native";

type Props = { title: string; color: string };

const CategoryGridTile = (props: Props) => {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{props.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;
