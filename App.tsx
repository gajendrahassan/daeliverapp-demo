import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, LogBox } from 'react-native';
import tw from 'twrnc';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Heading from './screen'
import { useEffect } from 'react';
import { io } from 'socket.io-client'

const queryClient = new QueryClient()


export default function App() {


  // const { isLoading, error, data } = useQuery('repoData', () =>
  //    fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
  //      res.json()
  //    )
  //  )

  //  data && console.log(data);
   

  LogBox.ignoreLogs(['Setting a timer']) as any


   useEffect(() => {
    const socket = io('https://food911-node.php-dev.in:5000')


    socket.on('connnection', () => {
      console.log('connected to server');
    })

  

    socket.on('message', (message:any) => {
      console.log(message);
    })

    // setInterval(()=>{

    //   socket.emit('test', {data:{
    //     id:"52",
    //     lng: Math.floor(Math.random() * 80),
    //     lat:Math.floor(Math.random() * 13)

    //   }})


    // }, 2000)

      socket.on('order', (newOrders:any) => {
        // setOrders(newOrders)
        console.log(newOrders);
      })

    socket.on('disconnect', () => {
      console.log('Socket disconnecting');
    })

  }, [])


  return (
    <QueryClientProvider client={queryClient}>

  <Heading/>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
