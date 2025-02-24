import {FlatList, Image, ScrollView, Text, Touchable, TouchableOpacity, View, StyleSheet} from "react-native";
import {Link} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import Search from "@/components/Search";
import {Card, FeaturedCard} from "@/components/Cards";
import Filters from "@/components/Filters";
import {useGlobalContext} from "@/lib/global-provider";

export default function Index() {

 const {user} = useGlobalContext()

  return (
    <SafeAreaView className="bg-white h-full">
        <FlatList data={[1,2, 3, 4]}
                  renderItem={({item}) => <Card /> }
                  keyExtractor={(item) => item.toString() }
                  numColumns={2}
                  contentContainerClassName="pb-32"
                  columnWrapperStyle={styles.columnStyles}
                  showsVerticalScrollIndicator={false}
                  ListHeaderComponent={() => (
            <View className="px-5">
            <View className="flex flex-row items-center justify-between mt-5">
                <View className="flex flex-row items-center">
                    <Image source={{uri: user?.avatar}} className="size-12 rounded-full"/>
                    <View className="flex flex-col items-start ml-2 justify-center">
                        <Text className="text-xs font-rubik text-black-100">Good Morning</Text>
                        <Text className="text-base font-rubik-medium text-black-300">{user?.name}</Text>
                    </View>
                </View>
                <Image source={icons.bell} className="size-6"/>
            </View>
            <Search />
            <View className="my-5">
                <View className="flex flex-row items-center justify-between">
                    <Text className="text-xl font-rubik-bold text-black-300">Featured</Text>
                    <TouchableOpacity>
                        <Text className="text-base font-rubik-bold text-primary-300">See All</Text>
                    </TouchableOpacity>
                </View>
<FlatList
    data={[1,2,3,4]}
    renderItem={({item}) => <FeaturedCard/>}
    keyExtractor={(item) => item.toString()}
    horizontal
    showsHorizontalScrollIndicator={false}
    bounces={false}
    contentContainerStyle={styles.columnStyles}
/>


            <View className="flex flex-row items-center justify-between">
                <Text className="text-xl font-rubik-bold text-black-300">Our Recomendations</Text>
                <TouchableOpacity>
                    <Text className="text-base font-rubik-bold text-primary-300">See All</Text>
                </TouchableOpacity>
            </View>

            <Filters />
            </View>
        </View>)
        }/>



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    columnStyles: {
        display: 'flex',
        gap: 10,
        marginTop: 5,
    },
});