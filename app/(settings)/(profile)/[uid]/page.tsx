import { useRouter } from "expo-router";
import { View, Text, ScrollView } from "react-native";

export default function Profile() {
  const navigation = useRouter();

  return (
    <ScrollView className="h-full">
      <View className="mt-8 ml-8">
        <Text className=" text-black text-[40px] font-bold mb-10">Profile</Text>
      </View>
    </ScrollView>
  );
}
