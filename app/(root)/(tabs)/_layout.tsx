import {View, Text} from 'react-native'
import React from 'react'
import {Tabs} from "expo-router";
import TabsIcon from "@/components/TabsIcon";
import icons from "@/constants/icons";

const TabsLayout = () => {
    return (
        <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: 'white',
                position: "absolute",
                borderTopColor: '#0061FF8A',
                borderTopWidth: 1,
                minHeight: 70
             }
        }}>
            <Tabs.Screen name="index" options={{
                title: "Home",
                headerShown: false,
                tabBarIcon: ({focused}) => (
                <View>
                    <TabsIcon icon={icons.home} focused={focused}title="Home"/>
                </View>
                )
            }}
                            />
            <Tabs.Screen name="explore" options={{
                title: "Explore",
                headerShown: false,
                tabBarIcon: ({focused}) => (
                <View>
                    <TabsIcon icon={icons.search} focused={focused}title="Explore"/>
                </View>
                )
            }}
                            />
            <Tabs.Screen name="profile" options={{
                title: "Profile",
                headerShown: false,
                tabBarIcon: ({focused}) => (
                <View>
                    <TabsIcon icon={icons.person} focused={focused}title="Profile"/>
                </View>
                )
            }}
                            />
        </Tabs>
    )
}
export default TabsLayout
