import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{headerShown: false , title: "Home"}} />
      <Tabs.Screen name="Search" options={{headerShown: false , title: "Search"}} />
      <Tabs.Screen name="Saved" options={{headerShown: false , title: "Saved"}} />
      <Tabs.Screen name="Profile" options={{headerShown: false , title: "Profile"}} />
    </Tabs>
  )
}

export default _layout
