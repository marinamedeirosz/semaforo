import { View, StyleSheet } from "react-native";
import Luz from '../componentes/Luz'


export default function Semaforo() {
    return (
        <View style={styles.semaforoView}>
            <Luz cor='red'></Luz>
            <Luz cor='yellow'></Luz>
            <Luz cor='green'></Luz>
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