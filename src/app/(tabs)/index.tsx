import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";


export default function Index() {
  return (
    <View className="flex min-h-[100vh]">
      <Text>Hello There</Text>
      <Text>Hello Val</Text>
      <Link className="bg-cyan-400" href='/insight'>Insight</Link>
      <View className="gap-4  flex-row h-24 justify-center items-center bg-background">
        <Text className="bg-cyan-500 py-[12px] px-8 rounded-2xl text-white ">Subsmit</Text>
        <Text className="bg-cyan-500 py-2 px-4 rounded-2xl text-white">Submit</Text>
        <Link href='/onboarding'>Onboarding</Link>
      </View>
      <Link href='/signIn'>Sign In</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
