import { StyleSheet, TouchableOpacity, Alert, View } from "react-native";
import { useState } from "react";


export default function Luz({cor, funcao}) {
    const [estado, setEstado] = useState(false);
    const clica = () => setEstado(true)

    return (
        <View>
            <TouchableOpacity style={[styles.luzApagada, {backgroundColor: cor}, estado.isFalse ? styles.luzApagada : null]} onPress={() => clica}></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    luzTouchable: {
        borderRadius: "50%",
        height: 100,
        width: 100,
        margin: 10,
    },
    luzApagada: {
        borderRadius: "50%",
        height: 100,
        width: 100,
        margin: 10,
        opacity: 0.5
    }
});