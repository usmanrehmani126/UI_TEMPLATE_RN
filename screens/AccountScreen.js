import { View, TouchableOpacity, Image, Text } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const AccountScreen = () => {
  return (
    <View className="flex-1 bg-white">
      <LinearGradient colors={['#FF6600', '#FBBB00']}className="h-full">
        <View
          className="bg-white h-[460px]"
          style={{
            borderBottomRightRadius: 200,
            borderBottomLeftRadius: 200,
          }}>
          <Image source={require('../assets/gym.png')} className="w-full my-2" />
          <View className="absolute top-[160px] left-[100px]">
            <Image source={require('../assets/fitness.png')} />
          </View>
          <View className="w-full px-14 flex-row items-center justify-center gap-3 mt-4">
            <Text className="text-[#713711] font-bold text-[40px]">Join</Text>
            <Text className="text-[#FF6600] font-bold text-[40px]">Us!</Text>
          </View>
        </View>
        <View className="w-full px-12 mt-4">
          <TouchableOpacity className="bg-[#713711]  p-3 items-center  rounded-full flex-row mb-4 justify-center">
            <Image source={require('../assets/email.png')} className="mr-6" />
            <Text className="text-white text-[15px]">EMAIL</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#713711]  p-3 items-center  rounded-full flex-row mb-4 justify-center">
            <Image source={require('../assets/fb.png')} className="mr-4" />
            <Text className="text-white  text-[15px]">FACEBOOK</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white  p-3 items-center  rounded-full flex-row justify-center">
            <Image source={require('../assets/google.png')} className="mr-6" />
            <Text className="text-[#0C3EA0] text-[15px]">GOOGLE</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-white  p-3 items-center  rounded-full flex-row mb-2 justify-center mt-12">
            <Text className="text-[#FF6600] text-[15px] ml-6">
              CREATE NEW ACCOUNT
            </Text>
          </TouchableOpacity>
          <Text className="text-white text-center text-[12px]">
            Start Your Free 30-Day Trial.
          </Text>
        </View>
        
      </LinearGradient>
    </View>
  );
};

export default AccountScreen;
