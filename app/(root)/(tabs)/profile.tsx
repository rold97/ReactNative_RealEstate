import {View, Text, ScrollView, Image, TouchableOpacity, Alert} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import icons from "@/constants/icons";
import images from "@/constants/images";
import SettingItem from "@/components/SettingItem";
import {settings} from "@/constants/data";
import {useGlobalContext} from "@/lib/global-provider";
import {logout} from "@/lib/appwrite";

const Profile = () =>
{
    const {user, refetch} = useGlobalContext()

    const handleLogout = async () => {
        const result = await logout()

        if(result) {
            Alert.alert('Succes', "You have been logged out succesfully ")
            refetch()
        } else {
            Alert.alert("Error", "An error occurred while logging out")
        }
    }
    return (
        <SafeAreaView className="h-full bg-white">
            <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="pb-32 px-7">
<View className="flex flex-row items-center justify-between mt-5">
    <Text className="text-xl font-rubik-bold">Profile</Text>
    <Image source={icons.bell} className="size-6" />
</View>
                <View className='flex flex-row justify-center mt-5'>
<View className="flex flex-col items-center relative mt-5">
    <Image source={{uri: user?.avatar}} className="size-44 relative rounded-full"/>
    <TouchableOpacity className="absolute bottom-11 right-2">
        <Image source={icons.edit} className="size-9"/>
    </TouchableOpacity>
    <Text className="text-2xl font-rubik-bold mt-2">{user?.name}</Text>

</View>
                </View>
                <View className="flex flex-col mt-5">
<                   SettingItem icon={icons.calendar} title="My Booking" />
                    <SettingItem icon={icons.wallet} title="Payments" />
                </View>
                <View className="flex flex-col mt-3 border-t pt-3 border-primary-200">
                    {settings.slice(2).map((item, index) => (
                      <SettingItem key={index} {...item} />
                    ))}
                </View>
                <View className="flex flex-col mt-3 border-t pt-3 border-primary-200">
                 <SettingItem icon={icons.logout} title="Logout" textStyles="text-danger" showArrow={false} onPress={handleLogout}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Profile
