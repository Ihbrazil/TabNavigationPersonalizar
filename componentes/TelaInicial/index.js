import React from "react";
import { View, Text } from "react-native";

import estilos from "./estilos";

export default function TelaInicial() {
    return (
        <View style={ estilos.container }>
            <Text style={ estilos.titulo}>TelaInicial</Text>
            <Text style={ estilos.subtitulo}>Essa é a primeira tela do aplicatico</Text>
        </View>
    )
}