import React, { useContext, useEffect } from "react";
import {
  Button,
  FlatList,
  Text,
  Container,
  HStack,
  ArrowForwardIcon,
  Spacer,
  View,
  Center,
} from "native-base";
import { context } from "../context/context";
import { getposts } from "../actions";
const Home = ({ navigation }) => {
  console.log("home");
  const { state, dispatch } = useContext(context);
  useEffect(() => {
    const handleActionPromise = async () => {
      dispatch(await getposts());
    };
    handleActionPromise();
  }, []);
  return (
    <FlatList
      data={state.posts ? state.posts.list : []}
      renderItem={({ item }) => {
        return (
          <HStack justifyContent="space-between" space={3} margin={2}>
            <Text fontSize="18">{item.title}</Text>

            <ArrowForwardIcon
              size="4"
              onClick={() => {
                navigation.navigate("details", { id: item.id });
              }}
            />
          </HStack>
        );
      }}
      ItemSeparatorComponent={() => (
        <View
          style={{
            margin: 4,
            borderBottomColor: "black",
            borderBottomWidth: 2,
          }}
        ></View>
      )}
      ListEmptyComponent={() => (
        <Center>
          <Text fontSize="24">No items</Text>
        </Center>
      )}
      ListHeaderComponent={() => (
        <Center>
          <Text fontSize="24" borderBottomColor="grey" borderBottomWidth={3}>
            postsList
          </Text>
        </Center>
      )}
    />
  );
};
export default Home;
