import React, { useState } from "react";
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

export default function ExploreScreen() {

  const [messages, setMessages] = useState([
    {
      id: "1",
      text: "Olá 😊 Eu sou sua assistente capilar 👩‍🦱\n\nDigite *menu* para ver opções de ajuda.",
      sender: "ai"
    }
  ]);

  const [input, setInput] = useState("");

  function responderIA(texto:string) {

    const pergunta = texto.toLowerCase().trim();

    if (pergunta === "menu") {
      return `💙 MENU CAPILAR

1️⃣ Tipos de cabelo
2️⃣ Frizz
3️⃣ Hidratação
4️⃣ Cabelo seco
5️⃣ Cabelo oleoso
6️⃣ Produtos recomendados

Digite o número ou o tema para saber mais.`;
    }

    if (pergunta === "1" || pergunta.includes("tipo")) {
      return `Tipos de cabelo:

1A – liso muito fino  
1B – liso com volume  
1C – liso grosso  

2A – ondulado leve  
2B – ondulado definido  
2C – ondulado forte  

3A – cachos soltos  
3B – cachos definidos  
3C – cachos apertados  

4A – crespo macio  
4B – crespo em zig-zag  
4C – crespo muito fechado`;
    }

    if (pergunta === "2" || pergunta.includes("frizz")) {
      return `Frizz acontece quando o cabelo está ressecado.

Dicas:
• usar máscaras hidratantes
• óleo de argan ou coco
• evitar água muito quente
• usar leave-in anti-frizz`;
    }

    if (pergunta === "3" || pergunta.includes("hidratação")) {
      return `Hidratação devolve água ao cabelo.

Boas opções:
• máscaras hidratantes
• aloe vera
• pantenol
• óleos vegetais`;
    }

    if (pergunta === "4" || pergunta.includes("seco")) {
      return `Cabelo seco precisa de nutrição.

Dicas:
• máscaras nutritivas
• óleo de coco
• óleo de argan
• evitar muito calor`;
    }

    if (pergunta === "5" || pergunta.includes("oleoso")) {
      return `Cabelo oleoso precisa de equilíbrio.

Dicas:
• shampoo equilibrante
• evitar condicionador na raiz
• lavar em dias alternados`;
    }

    if (pergunta === "6" || pergunta.includes("produto")) {
      return `Produtos recomendados:

🧴 Para frizz
• Elseve Cicatri Renov
• Pantene Hidro-Cauterização

💧 Para hidratação
• Skala Babosa
• Novex Óleo de Argan

✨ Para cachos
• Salon Line #TodeCacho
• Seda Boom`;
    }

    return `😊 Posso te ajudar com cabelos!

Digite **menu** para ver todas as opções disponíveis.`;
  }

  function enviarMensagem() {

    if (!input.trim()) return;

    const userMsg = {
      id: Date.now().toString(),
      text: input,
      sender: "user"
    };

    const resposta = {
      id: (Date.now() + 1).toString(),
      text: responderIA(input),
      sender: "ai"
    };

    setMessages((prev) => [...prev, userMsg, resposta]);
    setInput("");
  }

  function renderItem({ item }:any) {

    const isUser = item.sender === "user";

    return (

      <View
        style={[
          styles.messageContainer,
          isUser ? styles.userContainer : styles.aiContainer
        ]}
      >

        {!isUser && (
          <Image
            source={{
              uri: "https://img.freepik.com/premium-vector/woman-avatar-profile-icon-with-wave-hair_18591-852.jpg"
            }}
            style={styles.avatar}
          />
        )}

        <View
          style={[
            styles.message,
            isUser ? styles.userMessage : styles.aiMessage
          ]}
        >
          <Text style={styles.text}>{item.text}</Text>
        </View>

      </View>

    );
  }

  return (

    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >

      <View style={styles.container}>

        <FlatList
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />

        <View style={styles.inputArea}>

          <TextInput
            style={styles.input}
            placeholder="Digite sua pergunta..."
            placeholderTextColor="#9ccfff"
            value={input}
            onChangeText={setInput}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={enviarMensagem}
          >
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>

        </View>

      </View>

    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#061a33",
    padding: 10
  },

  messageContainer: {
    flexDirection: "row",
    marginVertical: 6,
    alignItems: "flex-end"
  },

  aiContainer: {
    alignSelf: "flex-start"
  },

  userContainer: {
    alignSelf: "flex-end",
    flexDirection: "row-reverse"
  },

  avatar: {
    width: 34,
    height: 34,
    borderRadius: 20,
    marginRight: 6
  },

  message: {
    padding: 12,
    borderRadius: 14,
    maxWidth: "75%"
  },

  userMessage: {
    backgroundColor: "#1e88ff"
  },

  aiMessage: {
    backgroundColor: "#0d47a1"
  },

  text: {
    color: "white",
    fontSize: 15
  },

  inputArea: {
    flexDirection: "row",
    marginTop: 10
  },

  input: {
    flex: 1,
    backgroundColor: "#08264d",
    color: "white",
    padding: 12,
    borderRadius: 10
  },

  button: {
    marginLeft: 10,
    backgroundColor: "#1e88ff",
    paddingHorizontal: 18,
    justifyContent: "center",
    borderRadius: 10
  },

  buttonText: {
    color: "white",
    fontWeight: "bold"
  }

});