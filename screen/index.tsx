import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useQuery } from 'react-query'
import axios from 'axios';

const fetchPosts = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return data;
};

const usePosts = () => useQuery('posts', fetchPosts);


export default function Index() {

    

    const { data, isLoading, isSuccess } = usePosts();

  return (
    <View  style={tw`h-full flex justify-center items-center `}>
      <Text>index</Text>
      {
       isLoading !== true &&   data.map((item:any, i:any)=>{

            return       <Text key={i} >{item?.title}</Text>

          })
      }
    </View>
  )
}