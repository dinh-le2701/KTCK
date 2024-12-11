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
        View style = {
            {
                flexDirection: 'row',
                paddingHorizontal: 10,
                justifyContent: 'space-between',
            }
        } >
        <
        Text style = { styles.title }
        onPress = {
            () => navigation.navigate('StartScreen') } >
        Back <
        /Text> <
        Image source = { require('../assets/heart.png') }
        style = {
            { width: 50, height: 50 } }
        /> <
        /View> <
        View style = {
            { flexDirection: 'row', justifyContent: 'center' } } >
        <
        Image source = { require('../assets/3.png') }
        style = { styles.detailImg }
        /> <
        /View> <
        View style = {
            { flexDirection: 'row', justifyContent: 'center' } } >
        <
        Image source = { require('../assets/3.png') }
        style = { styles.detailtImg }
        /> <
        Image source = { require('../assets/5.png') }
        style = { styles.detailtImg }
        /> <
        /View>

        <
        View style = {
            { paddingHorizontal: 10, flexDirection: "row", marginTop: 30 } } >
        <
        View style = {
            { paddingHorizontal: 10, flexDirection: "row", alignItems: "center", marginTop: 30 } } >
        <
        Image source = { require('../assets/star.png') }
        style = {
            { height: 30, width: 30 } }
        /> <
        Text style = {
            { fontSize: 30, marginEnd: 30 } } > 4.8 < /Text> <
        /View>

        <
        View style = {
            { paddingHorizontal: 10, flexDirection: "row", alignItems: "center", marginTop: 30 } } >
        <
        Text style = {
            { fontSize: 20, marginEnd: 30 } } > 145 reviews < /Text> <
        /View> <
        /View>

        <
        View style = {
            { paddingHorizontal: 10, marginTop: 30 } } >
        <
        Text style = {
            { fontSize: 30, marginEnd: 30 } } > Leset Galant < /Text> <
        Text style = {
            { fontSize: 15, marginEnd: 30 } } >
        loremdujsnd; asdkjf jdjhfknhf gsjdh loremdujsndasdkjf jdjhfknhf gsjdh loremdujsnd asdkjf jdjhfknhf gsjdh loremdujsndasdkjf jdjhfknhfgsjd <
        /Text> <
        /View>

        <
        View style = {
            {
                flexDirection: 'row',
                marginVertical: 30,
                justifyContent: 'center',
            }
        } >
        <
        Text style = {
            { fontSize: 30, marginEnd: 30 } } > $64 .00 < /Text> <
        Button style = {
            {
                paddingHorizontal: 30,
                color: '#fff',
                backgroundColor: '#fff',
            }
        }
        title = "Add to cart"
        onPress = {
            () => navigation.navigate('DetailScreen') } > < /Button> <
        /View> <
        /View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 30,
    },
    detailImg: {
        flexDirection: 'row',
    },
    detailtImg: {
        width: 90,
        height: 90,
    },
    catalog: {
        backgroundColor: '#fff',
        color: '#000',
        borderRadius: 20,
        padding: 15,
        marginTop: 30,
    },
});

export default DetailScreen;