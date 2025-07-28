import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

interface porps {
    placeholder:string,
    onPress:()=>void
}

const SearchBar = ({placeholder ,onPress}:porps) => {
  return (
    <View className='flex-row  items-center dark-bg-200 rounded-full px-5 py-4'>
      <Image source={icons.search} className='size-5' resizeMode='contain' tintColor={'#ab8bff'} />
      <TextInput className='flex-1 ml-2 text-white' 
      onPress={onPress}
       placeholder={placeholder}
       value='' 
       onChangeText={(e) => {  }} 
       placeholderTextColor={'#ab8bff'}/>
    </View>
  )
}

export default SearchBar 