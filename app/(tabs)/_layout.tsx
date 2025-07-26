import React from 'react'
import { Tabs } from 'expo-router'
import { Image, ImageBackground, View } from 'react-native'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'
import { Text } from 'react-native'


const TabIcon = ({focused, icon, text} : any) => {
 if(focused){
  return (

    <ImageBackground source={images.highlight} className='flex flex-row w-full flex-1 min-w-[110px] min-h-16 mt-[11.5px] justify-center items-center rounded-full overflow-hidden'>
      <Image
        source={icon}
        tintColor={focused ? '#fff' : '#151312'}
        className="size-5"
      />
      <Text className='text-secondary text-base font-semibold ml-2 '>{text}</Text>
    </ImageBackground>

  )
}
else{
  return (
    <View className='size-full rounded-full mt-4 flex flex-row justify-center items-center'>
   <Image source={icon} tintColor={'#A8B5DB'} className="size-5" />
    </ View>
  )
}
}

const _layout = () => {
  return (
    <Tabs
  screenOptions={{
    tabBarShowLabel: false,
    tabBarStyle: {
      backgroundColor: '#0f0D23',
      borderRadius:50,
      marginHorizontal:24,
      marginBottom:38,
      height:50,
      position: 'absolute',
      overflow: 'hidden',

    },
    tabBarItemStyle: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }}
>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({ focused }) => (

            <TabIcon focused={focused} icon={icons.home} text="Home" />

          ),
        }}
      />

      <Tabs.Screen
        name="Search"
        options={{ headerShown: false, title: "Search",
          tabBarIcon: ({ focused }) => (

            <TabIcon focused={focused} icon={icons.search} text="Search" />

          ),

         }}

      />
      <Tabs.Screen
        name="Saved"
        options={{ headerShown: false, title: "Saved",
          tabBarIcon: ({ focused }) => (

            <TabIcon focused={focused} icon={icons.save} text="Saved" />

          ),

         }}

      />
      <Tabs.Screen name="Profile" options={{ headerShown: false, title: "Profile",
        tabBarIcon: ({ focused }) => (

          <TabIcon focused={focused} icon={icons.person} text="Profile" />

        ),

       }} />
    </Tabs>
  )
}

export default _layout
