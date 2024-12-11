import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Button,
    Image,
} from 'react-native';

const ShowScreen = ({ navigation }) => {
    const gotoCatalog = () => {
        navigation.navigate('ShowScreen');
    };
    return ( <
        View style = {
            { paddingHorizontal: 10 } } >
        <
        View >
        <
        Image source = { require('../assets/profile.png') }
        style = { styles.detailtImg }
        /> <
        /View> <
        Text style = {
            { fontSize: 28, fontWeight: 'bold' } } >
        Discover products <
        /Text> <
        View style = { styles.catalog } >
        <
        Button style = { styles.catalog }
        title = "Go to catalog"
        onPress = {
            () => navigation.navigate('DetailScreen') } > < /Button> <
        /View>

        <
        View style = {
            { flexDirection: 'row', justifyContent: "space-between", alignItems: "center", paddingHorizontal: 10 } } >
        <
        Image source = { require('../assets/home.png') }
        style = {
            { height: 30, width: 30 } }
        /> <
        Image source = { require('../assets/search.png') }
        style = {
            { height: 30, width: 30 } }
        /> <
        Image source = { require('../assets/heart.png') }
        style = {
            { height: 30, width: 30 } }
        /> <
        Image source = { require('../assets/profile.png') }
        style = {
            { height: 30, width: 30 } }
        /> <
        /View> <
        /View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        padding: 20,
    },
    con2: {
        flexDirection: 'row',
        height: 300,
        width: 400,
        backgroundColor: '#ffffff',
    },
    text2: {
        fontSize: 20,
        position: 'left',
        textAlign: 'center',
        fontFamily: 'sans-serif',
        color: '#000',
        width: '100%', // Matching the width of the imageContainer
    },
    title: {
        fontSize: 65,
        textAlign: 'center',
        fontFamily: 'sans-serif',
        color: '#000',
        width: '100%', // Matching the width of the imageContainer
    },
    catalog: {
        backgroundColor: '#fff',
        color: '#000',
        borderRadius: 20,
        padding: 15,
        marginTop: 30,
    },
    image: {
        width: 292,
        height: 270,
    },
    subtitle: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    button: {
        backgroundColor: 'red',
        borderRadius: 30,
        width: 200,
        paddingVertical: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ShowScreen;