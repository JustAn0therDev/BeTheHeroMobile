import React from "react";

import { View, Text, Image, Linking, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as MailComposer from "expo-mail-composer";

import styles from "./styles";
import generalStyles from "../../styles/generalStyles";
import { Feather } from "@expo/vector-icons";
import logoImg from "../../assets/logo.png";

export default function Details() {
  const navigation = useNavigation();
  const route = useRoute();
  const incident = route.params.incident;

  let message = `Olá, ${
    ong.name
  }, estou entrando em contato pois gostaria de ajudar no caso ${
    incident.title
  } com o valor de ${Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(incident.value)}`;

  function navigateBackToLastPage() {
    navigation.goBack();
  }

  async function sendEmailMessage() {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: ["ruanmontelo@gmail.com"],
      body: message
    });
  }

  function sendWhatsappMessage() {
    Linking.openURL(
      `whatsapp://send?phone="${incident.whatsapp}"&text=${message}`
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity onPress={navigateBackToLastPage}>
          <Feather
            name="arrow-left"
            size={28}
            color={generalStyles.mainBeTheHeroRedColor}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
        <Text style={styles.incidentValue}>
          {incident.name} de {incident.city}/{incident.uf}
        </Text>

        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>{incident.title}</Text>

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={styles.incidentValue}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
          }).format(incident.value)}
        </Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

        <Text style={styles.description}>Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.actions}
            onPress={sendWhatsappMessage}
          >
            <Text style={styles.actionText}>Whatsapp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actions} onPress={sendEmailMessage}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
