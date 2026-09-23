import { Stack } from "expo-router";

export default function AuthLayout() {
    return (
        <Stack screenOptions={{headerShown:false}}><Stack.Screen name="signIn" options={{title:'sign in'}}></Stack.Screen></Stack>
    )
}