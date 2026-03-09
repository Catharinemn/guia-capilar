import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const hairTypes = [
  {
    title: "Tipo 1 - Liso",
    types: [
      { name: "1A", img: require("../../assets/cabelos/1A.png") },
      { name: "1B", img: require("../../assets/cabelos/1B.png") },
      { name: "1C", img: require("../../assets/cabelos/1C.png") }
    ]
  },
  {
    title: "Tipo 2 - Ondulado",
    types: [
      { name: "2A", img: require("../../assets/cabelos/2A.png") },
      { name: "2B", img: require("../../assets/cabelos/2B.png") },
      { name: "2C", img: require("../../assets/cabelos/2C.png") }
    ]
  },
  {
    title: "Tipo 3 - Cacheado",
    types: [
      { name: "3A", img: require("../../assets/cabelos/3A.png") },
      { name: "3B", img: require("../../assets/cabelos/3B.png") },
      { name: "3C", img: require("../../assets/cabelos/3C.png") }
    ]
  },
  {
    title: "Tipo 4 - Crespo",
    types: [
      { name: "4A", img: require("../../assets/cabelos/4A.png") },
      { name: "4B", img: require("../../assets/cabelos/4B.png") },
      { name: "4C", img: require("../../assets/cabelos/4C.png") }
    ]
  }
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {hairTypes.map((group, index) => (
        <View key={index}>
          <Text style={styles.title}>{group.title}</Text>

          <View style={styles.row}>
            {group.types.map((hair, i) => (
              <View key={i} style={styles.hairBox}>
                <Image
                  source={hair.img}
                  style={styles.image}
                />

                <Text style={styles.hairLabel}>
                  {hair.name}
                </Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#0A2540",
    padding:20
  },

  title:{
    fontSize:22,
    color:"#fff",
    marginBottom:15,
    marginTop:20,
    fontWeight:"bold"
  },

  row:{
    flexDirection:"row",
    justifyContent:"space-between"
  },

  hairBox:{
    alignItems:"center"
  },

  image:{
    width:100,
    height:100,
    borderRadius:10
  },

  hairLabel:{
    color:"#fff",
    marginTop:8,
    fontWeight:"bold"
  }

});