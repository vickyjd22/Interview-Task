
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Pressable,
    Image
} from 'react-native';

export const DebitCardSpendingBar = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>

                <Text style={styles.header}>Debit card spending limit</Text>
                <Text style={styles.subtitle}>$345  </Text>
                <Text style={styles.subtitleBlur}>|  $5,000</Text>        

        </SafeAreaView>
    );
};

export default DebitCardSpendingBar;

const styles = StyleSheet.create({
    container: {
        flex: 0,
        marginTop: '40%',
        position: 'relative',
        flexDirection: 'row'
    },
    header: {
        marginLeft: '1%',
        color: '#222222',
        fontWeight: '600',
        fontSize: 13
    },
    subtitle: {
        position: 'absolute',
        right: 50,
        color: '#01D167',
        fontWeight: '600',
        fontSize: 13
    },
    subtitleBlur: {
        position: 'absolute',
        right: 0,
        color: '#22222233',
        fontWeight: '600',
        fontSize: 13
    },
});


