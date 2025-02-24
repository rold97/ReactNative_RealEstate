import {View, Text, TouchableOpacity, Image, ImageSourcePropType} from 'react-native'
import React from 'react'
import icons from "@/constants/icons";

interface SettingItemProps {
    icon: ImageSourcePropType;
    title: string;
    onPress?: () => void;
    textStyles?: string;
    showArrow?: boolean;
}

const SettingItem = ({icon, title, onPress, textStyles, showArrow = true}: SettingItemProps) => {
    return (
        <TouchableOpacity className="flex flex-row items-center justify-between py-3" onPress={onPress}>
            <View className="flex flex-row items-center gap-3">
                <Image source={icon} className="size-6 " />
            <Text className={`text-lg font-rubik-medium text-black-300 ${textStyles}`}>{title}</Text>
            </View>

            {showArrow && <Image source={icons.rightArrow} className="size-5"/>}
        </TouchableOpacity>
    )
}
export default SettingItem
