import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-[#00CCBB] justify-center items-center">
      <Animatable.Image
        source={require("../assets/foodDelivery.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="w-full h-3/5"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-md my-10 text-white font-bold text-center"
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>
      <Progress.Circle color="white" size={60} indeterminate={true} />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
