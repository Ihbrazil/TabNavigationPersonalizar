import React from "react";
import { View, Text } from "react-native";

import estilos from "./estilos";

export default function TelaSobre() {
    return (
        <View style={ estilos.container }>
            <Text style={ estilos.titulo}>Tela Sobre</Text>
            <Text style={ estilos.subtitulo}>Essa é a segunda tela do aplicatico</Text>
        </View>
    )
}