import Feather from '@expo/vector-icons/Feather';
import { Tabs } from "expo-router";


export default function TabsLayout () {
    return (
        <Tabs screenOptions={{headerShown:false, tabBarShowLabel:false}}>
            <Tabs.Screen name="index" options={{title:'Home', tabBarIcon: ({color, size}) => {return <Feather name="home" size={size} color={color} />}}}/>
        </Tabs>
    )
}