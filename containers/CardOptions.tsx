

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Pressable,
    Image,
    Switch
} from 'react-native';
import { useEffect, useState } from 'react';

export const CardOptions = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Image
                    style={{ width: 32, height: 32 }}
                    source={require('../assets/images/insight.png')}
                />
                <View>
                    <Text style={styles.title}>Top-up account</Text>
                    <Text style={styles.subtitle}>Deposit money to your account to use with card</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Image
                    style={{ width: 32, height: 32 }}
                    source={require('../assets/images/Transfer.png')}
                />
                <View>
                    <Text style={styles.title}>Weekly spending limit</Text>
                    <Text style={styles.subtitle}>Your weekly spending limit is S$ 5,000</Text>
                </View>
                <Switch
                    style={{ position: 'absolute', right: 0 }}
                    trackColor={{ false: "#EEEEEE", true: "#01D167" }}
                    thumbColor={isEnabled ? "#EEEEEE" : "#EEEEEE"}
                    ios_backgroundColor="#EEEEEE"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>

            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Image
                    style={{ width: 32, height: 32 }}
                    source={require('../assets/images/nature.png')}
                />
                <View>
                    <Text style={styles.title}>Freeze card</Text>
                    <Text style={styles.subtitle}>Your debit card is currently active</Text>
                </View>
                <Switch
                    style={{ position: 'absolute', right: 0 }}
                    trackColor={{ false: "#EEEEEE", true: "#01D167" }}
                    thumbColor={isEnabled ? "#EEEEEE" : "#EEEEEE"}
                    ios_backgroundColor="#EEEEEE"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>

            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Image
                    style={{ width: 32, height: 32 }}
                    source={require('../assets/images/TransferCard.png')}
                />
                <View>
                    <Text style={styles.title}>Got a new card</Text>
                    <Text style={styles.subtitle}>This deactivates your current debit cards</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Image
                    style={{ width: 32, height: 32 }}
                    source={require('../assets/images/TransferAbort.png')}
                />
                <View>
                    <Text style={styles.title}>Deactivated cards</Text>
                    <Text style={styles.subtitle}>Your previously deactivated cards</Text>
                </View>
            </View>

        </SafeAreaView>
    );
};

export default CardOptions;

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
    title: {
        fontSize: 14,
        marginLeft: '5%',
        fontWeight: 'bold',
    },
    subtitle: {
        margin: '5%',
        color: '#FFFFFF',
        fontWeight: 'normal',
        fontSize: 14,
    }
});


























