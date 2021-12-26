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
//images/icons
import Drawer from '../../assets/Icons/Drawer.png';
import Notification from '../../assets/Icons/Notification.png';
import Profile from '../../assets/Image/profilePlaceholder.png';
import Plus from '../../assets/Icons/Plus.png';

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={'#180521'} />
            <View style={styles.NavBar} />
            <View style={styles.profileContainer}>
                <Image style={styles.profile} source={Profile} />
            </View>
            <TouchableOpacity style={styles.containerDrawer}>
                <Image style={styles.drawer} source={Drawer} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerNotification}>
                <Image style={styles.notif} source={Notification} />
            </TouchableOpacity>
            {/* Button Flut */}
            <TouchableOpacity style={styles.containerButtonFlut}>
                <Image style={styles.buttonFlut} source={Plus} />
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#180521',
    },
    NavBar: {
        backgroundColor: '#452853',
        height: '10%',
        width: '100%',
        position: 'absolute',
        zIndex: 0,
    },
    profileContainer: {
        alignItems: 'center',
        marginTop: '5%',
    },
    profile: {
        zIndex: 1,
        position: 'absolute',
        width: '20%',
        height: 83,
    },
    //DrawerStyle
    drawer: {
        width: 30,
    },
    containerDrawer: {
        zIndex: 1,
        position: 'absolute',
        left: '5%',
        top: '3.4%',
    },
    //Notification Style
    notif: {
        borderColor: '#FFF',
        zIndex: 2,

    },
    containerNotification: {
        zIndex: 1,
        position: 'absolute',
        right: '5%',
        top: '1.5%',
        borderColor: '#FFF',
        borderWidth: 1,
        padding: 15,
        borderRadius: 100,
    },
    //buttonFlut
    containerButtonFlut:{
        position: 'absolute',
        zIndex: 1,
        right: '5%',
        bottom: '4%',
        borderColor: '#FFF',
        borderWidth: 1,
        padding: 15,
        borderRadius: 100,
    },
    buttonFlut:{
        zIndex: 2,
        width: 30,
        height: 30,
    }
});

