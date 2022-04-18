
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

export const DebitCard = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>

            <Text style={{
                color: '#FFFFFF',
                fontWeight: '600',
                fontSize: 22, width: 59, height: 10, marginTop: '5%', position: 'absolute', right: 10
            }}>
                aspire
            </Text>
            <Text style={styles.header}>
                Mark Henry
            </Text>

            <Text style={styles.subtitle}>5647   3411   2413   2020</Text>

            <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row', backgroundColor: '#01D167', height: 22, borderRadius: 5, marginLeft: '5%' }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 13, alignSelf: 'center', margin: 2 }}>Thru: 12/20          </Text>
                    <Text style={{ color: '#FFFFFF', fontSize: 13, alignSelf: 'center', marginLeft: '2%' }}>CVV: 456</Text>
                </View>
                <Image
                    style={{ width: 59, height: 20, marginTop: 25, position: 'absolute', right: 20 }}
                    source={require('../assets/images/visa.png')}
                />
            </View>

            <Pressable
                onPress={() => navigation.navigate('Modal')}
                style={({ pressed }) => ({
                    opacity: pressed ? 0.5 : 1,
                    marginTop: '12%',
                    position: 'absolute',
                    right: '8%'
                })}>
                <Image
                    style={{ width: 25, height: 25 }}
                    source={require('../assets/images/logo.png')}
                />
            </Pressable>

        </SafeAreaView>
    );
};

export default DebitCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#01D167', borderRadius: 15, height: 220
    },
    header: {
        marginTop: '20%',
        margin: '5%',
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 22,
    },
    subtitle: {
        marginTop: '3%',
        margin: '5%',
        letterSpacing: 3.46,
        color: '#FFFFFF',
        fontWeight: 'normal',
        fontSize: 14,
    }
});


