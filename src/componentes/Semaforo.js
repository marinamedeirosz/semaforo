import { View, StyleSheet } from "react-native";
import Vermelho from "./luzes/Vermelho";
import Amarelo from "./luzes/Amarelo";
import Verde from "./luzes/Verde";


export default function Semaforo() {

    return (
        <View style={styles.semaforoView}>
            <Vermelho></Vermelho>
            <Amarelo></Amarelo>
            <Verde></Verde>
        </View>
    );
}

const styles = StyleSheet.create({
    semaforoView: {
        backgroundColor: 'black',
        width: '150px',
        height: '400px',
        margin: 'auto',
        bordeRadius: '10px',
        paddingTop: '20px',
        alignItems: 'center',
        borderRadius: '10%'
    }
});