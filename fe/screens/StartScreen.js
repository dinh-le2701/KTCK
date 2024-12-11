import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Button,
    Image,
} from 'react-native';

const DetailScreen = ({ navigation }) => {
    const gotoCatalog = () => {
        navigation.navigate('ShowScreen');
    };
    return ( <
        View style = { styles.container } >
        <
        Text style = { styles.title } > Renovate your interior < /Text> <
        View style = { styles.catalog } >
        <
        Button style = { styles.catalog }
        title = "Go to catalog"
        onPress = {
            () => navigation.navigate('ShowScreen') } > < /Button> <
        /View>

        <
        View style = { styles.con2 } >
        <
        View style = {
            { height: 50, width: 50 } } >
        <
        Text style = { styles.text2 } > Popular products < /Text> <
        /View> <
        View style = {
            { height: 50, width: 50 } } >
        <
        Text > View all < /Text> <
        /View> <
        /View> <
        View style = {
            { flexDirection: 'row' } } >

        <
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

export default DetailScreen;