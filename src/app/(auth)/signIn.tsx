import { Link } from 'expo-router'
import { Text, View } from 'react-native'

export default function SignIn() {
    return (
        <View>
            <Text>Sign In</Text>
            <Link className='bg-blue-300 mt-22' href='/'>Home</Link>
        </View>
    )
}