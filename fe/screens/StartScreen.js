import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, Image } from 'react-native';

const DetailScreen = ({ navigation }) => {

  const gotoCatalog = () => {
      navigation.navigate("ShowScreen")
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Renovate your interior</Text>
      <View style={styles.catalog}>
        <Button style={styles.catalog}

          title="Go to catalog"
          onPress={() => gotoCatalog()}></Button>
      </View>

      
      
    </View>
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
  title: {
    fontSize: 35,
    textAlign: 'center',
    fontFamily: 'sans-serif',
    marginTop: -40,
    width: '100%', // Matching the width of the imageContainer
  },
  imageContainer: {
    backgroundColor: '#FDE8E8',
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
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
