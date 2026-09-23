import { Link } from 'expo-router'
import { Text, View } from 'react-native'

export default function Onboarding() {
    return (
        <>
        <View>
            <Text>Hello Onboarding</Text>
            <Link href='/'>Home</Link>
        </View>
        </>
    )
}