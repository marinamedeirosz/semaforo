import { View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useState } from "react";



export default function Luz({cor}) {
    const [estado, setEstado] = useState('apagado');

    const acende = () => {
        setEstado("aceso");
    };

    const apaga = () => {
        setEstado("apagado");
    };
    const muda = () => {
        Alert.alert('apertou');
    }
    return (
        <View>
            <TouchableOpacity style={[styles.luzTouchableOpacity, {backgroundColor: cor}]} onClick={muda()}></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    luzTouchableOpacity: {
        borderRadius: "50%",
        height: 100,
        width: 100,
        margin: 10
    }
});