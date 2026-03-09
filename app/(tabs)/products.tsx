import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

const produtos = [

{
id:1,
nome:"Elseve Hydra Hialurônico",
funcao:"Hidratação profunda",
imagem:require("../../assets/produtos/elseve.jpg.png")
},

{
id:2,
nome:"Pantene Controle de Frizz",
funcao:"Reduz frizz",
imagem:require("../../assets/produtos/pantene.jpg.png")
},

{
id:3,
nome:"Moroccanoil Treatment",
funcao:"Brilho e nutrição",
imagem:require("../../assets/produtos/moroccanoil.jpg.png")
},

{
id:4,
nome:"TRESemmé Reconstrução",
funcao:"Reconstrução capilar",
imagem:require("../../assets/produtos/tresemme.jpg.png")
},

{
id:5,
nome:"Lola Morte Súbita",
funcao:"Máscara ultra hidratante",
imagem:require("../../assets/produtos/lola.jpg.png")
},

{
id:6,
nome:"Kérastase Nutritive",
funcao:"Nutrição intensa",
imagem:require("../../assets/produtos/kerastase.jpg.png")
},

{
id:7,
nome:"Elseve Óleo Extraordinário",
funcao:"Controle de frizz e brilho",
imagem:require("../../assets/produtos/oleo.jpg.png")
},

{
id:8,
nome:"Aussie 3 Minute Miracle",
funcao:"Hidratação rápida",
imagem:require("../../assets/produtos/aussie.jpg.png")
},

];

export default function ProductsScreen(){

return(

<View style={styles.container}>

<Text style={styles.titulo}>Produtos Recomendados</Text>

<FlatList
data={produtos}
keyExtractor={(item)=>item.id.toString()}
renderItem={({item})=>(

<View style={styles.card}>

<Image
source={item.imagem}
style={styles.image}
/>

<Text style={styles.nome}>{item.nome}</Text>

<Text style={styles.funcao}>{item.funcao}</Text>

</View>

)}
/>

</View>

)
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#111",
padding:15
},

titulo:{
color:"#fff",
fontSize:22,
marginBottom:20,
fontWeight:"bold"
},

card:{
backgroundColor:"#222",
padding:15,
borderRadius:10,
marginBottom:15
},

image:{
width:"100%",
height:200,
borderRadius:10
},

nome:{
color:"#fff",
fontSize:18,
marginTop:10
},

funcao:{
color:"#aaa",
marginTop:5
}

});