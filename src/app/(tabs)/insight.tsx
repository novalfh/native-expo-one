import { Link } from 'expo-router'
import { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'

export default function Insight() {
    const [data, setData] = useState()

    useEffect(() => {
        async function getData () {
            try {
                const fetchedData = await fetch('http://localhost:8055/items/test');

                if (!fetchedData.ok) {
                    throw new Error('error fetching')
                }
                const jsonn = await fetchedData.json()
                setData(jsonn.data)
                const sss = [1,2,3,4]
                // console.log(data.data[0])
            } catch (error){
                console.log(error)
            }
        }

        getData()
        
    }, [])
    
    const myd = [
  { id: "1", name: "John" },
  { id: "2", name: "Jane" },
]
    
    return (<View>
        <Text>Insight</Text>
        <FlatList
            data={data}
            renderItem={({item}) => <Text>{item.name}</Text>}
            keyExtractor={(item) => item.id}/>
        <Link href='/' className='bg-cyan-300'>Home</Link>
    </View>)
}