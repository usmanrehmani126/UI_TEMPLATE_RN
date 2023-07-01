import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
const GetStartedScreen = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={['#FBBB00', '#FF6600']}
      style={styles.gradientContainer}>
      <View className="mt-44">
        <Text className="text-white text-2xl text-center">Welcome</Text>
      </View>
      <View
        className="bg-white flex-1 mt-44"
        style={{borderTopLeftRadius: 180, borderTopRightRadius: 180}}>
        <View className="w-full px-20 mt-32">
          <TouchableOpacity
            className="bg-[#FBBB00]  p-4 items-center justify-center rounded-full"
            onPress={() => navigation.navigate('AccountScreen')}>
            <Text className="text-white text-xl">Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default GetStartedScreen;

const styles = StyleSheet.create({
  gradientContainer: {
    height: 800,
    paddingTop: 120,
  },
});
