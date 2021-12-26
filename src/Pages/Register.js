import react from "react";
import {
    View,
    StyleSheet,
    Text,
    SafeAreaView,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Image
}
    from "react-native";
// import { FaFacebook } from 'react-icons/fa';
import Logo from '../../assets/Logo/LogoDevFinder.png';

export default function Register({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={'#180521'} />
            <View style={styles.logo}>
                <Image source={Logo} />
            </View>
            <TextInput
                style={styles.input}
                placeholder="Nome"
                placeholderTextColor={"#FFFFFF"}
            />
            <TextInput
                style={styles.input}
                placeholder="Sobrenome"
                placeholderTextColor={"#FFFFFF"}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor={"#FFFFFF"}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor={"#FFFFFF"}
            />
            <TextInput
                style={styles.input}
                placeholder="Confirme a Senha"
                placeholderTextColor={"#FFFFFF"}
            />
            <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={styles.textButton}>
                    Criar
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#180521',
    },
    TextLogin: {
        color: '#FFFFFF',
        fontSize: 25,
        textAlign: 'center',
        marginBottom: '5%',
    },
    logo: {
        marginBottom: '12%',
        marginTop: '5%',
        alignItems: "center",
    },
    input: {
        color: 'aliceblue',
        borderColor: '#FFFFFF',
        borderWidth: 1,
        marginHorizontal: '8%',
        height: '8%',
        borderRadius: 10,
        marginTop: '5%',
    },
    btn: {
        borderColor: '#FFFFFF',
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        height: '9%',
        borderRadius: 10,
        marginTop: '10%',
        marginHorizontal: '33%',

    },
    btnCad: {
        borderColor: '#FFFFFF',
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        height: '10%',
        height: '7%',
        borderRadius: 10,
        marginTop: '10%',
        marginHorizontal: '10%',

    },
    textButton: {
        color: '#FFFFFF',
    }
});

