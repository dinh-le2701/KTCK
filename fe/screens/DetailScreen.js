import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Button,
    Alert
} from 'react-native';
import axios from 'axios';

export default function DetailScreen({ navigation }) {
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);

    const handleLogin = () => {
        axios.post('http://localhost:5000/api/auth/login', { email, password })
            .then(res => {
                Alert.alert("Successfull", "Login successfull")
                navigation.navigate("Home")
            })
            .catch(err => {
                Alert.alert("Error", "Invalid credentials")
            })
    }

    return ( <
        SafeAreaView style = { styles.container } >
        <
        Text style = { styles.welcome } > Welcome! < /Text>

        <
        View style = { styles.email } >
        <
        TextInput style = { styles.input }
        placeholder = "Email"
        onChangeText = { setEmail }
        value = { email } > < /TextInput> <
        /View>

        <
        View style = { styles.password } >
        <
        TextInput style = { styles.input }
        placeholder = "Password"
        onChangeText = { setPassword }
        value = { password } > < /TextInput> <
        /View>

        <
        View style = { styles.login } >
        <
        Button title = "Login"
        onPress = { handleLogin } > < /Button> <
        /View>

        <
        View style = { styles.login } >
        <
        Button title = "Sign Up"
        onPress = {
            () => navigation.navigate('Sign Up') } > < /Button> <
        /View> <
        /SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30,
        marginTop: 100,
    },
    welcome: {
        fontSize: 35,
    },
    email: {
        marginTop: 35,
        padding: 10,
        borderRadius: 20,
        borderWidth: 1,
    },
    password: {
        marginTop: 35,
        padding: 10,
        borderRadius: 20,
        borderWidth: 1,
    },
    login: {
        marginTop: 35,
        padding: 10,
        borderRadius: 20,
        borderWidth: 1,
    },
    input: {
        fontSize: 25,
    },
});