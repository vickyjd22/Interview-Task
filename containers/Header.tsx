
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

export const Header = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#0C365A' }}>
            <Text style={styles.header}>
                Debit Card
            </Text>

            <Text style={styles.subtitle}>Available balance</Text>

            <View style={{ flexDirection: 'row' }}>
                <View style={{ backgroundColor: '#01D167', width: 40, height: 22, borderRadius: 5, marginLeft: '5%' }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 16, alignSelf: 'center', margin: 2 }}>S$</Text>
                </View>
                <Text style={{ color: '#FFFFFF', fontSize: 24, fontWeight: '600', alignSelf: 'center', marginLeft: '2%' }}>3,000</Text>
            </View>

            <Pressable
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

export default Header;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    header: {
        margin: '5%',
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 24,
    },
    subtitle: {
        margin: '5%',
        color: '#FFFFFF',
        fontWeight: 'normal',
        fontSize: 14,
    }
});


