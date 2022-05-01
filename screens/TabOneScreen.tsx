import { StyleSheet, Button, Image, Switch, Pressable } from 'react-native';
import * as React from 'react';
import { useEffect, useState } from 'react';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import BottomSheet from 'reanimated-bottom-sheet';
import { Header } from '../containers/Header';
import { DebitCard } from '../containers/DebitCard';
import { CardOptions } from '../containers/CardOptions';
import { DebitCardSpendingBar } from '../containers/DebitCardSpendingBar';


export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  useEffect(() => {
    sheetRef.current.snapTo(0);
  });

  const [isHidden, setIsHidden] = useState(false);
  const hideCardNumber = () => {
    setIsHidden(true);
  }

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const renderContent = () => (
    <View style={{ flex: 1 }}>
      <Pressable onPress={() => hideCardNumber()} style={{ position: 'absolute', right: 26, flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', width: 151, height: 40, borderRadius: 5 }}>
        <Image
          style={{ width: 16, height: 16, position: 'relative', right: -20, top: -5 }}
          source={require('../assets/images/hide.png')}
        />
        <Text style={styles.hidecard}>Hide card number</Text>
      </Pressable>

      <View
        style={{
          position: 'relative',
          zIndex: 5,
          padding: 25,
          opacity: 1,
          backgroundColor: 'transparent',
        }}>
        <DebitCard hide={isHidden} navigation={undefined} />
      </View>
      <View
        style={{
          position: 'relative',
          borderRadius: 25,
          backgroundColor: '#FFFFFF',
          padding: 25,
          marginTop: '10%',
          width: '100%',
          height: 1050
        }}>
        <DebitCardSpendingBar />
        <CardOptions navigation={undefined} />
      </View>
    </View>
  );

  const sheetRef = React.useRef(null);

  return (
    <View style={styles.container}>

      <Header navigation={undefined} />

      <BottomSheet
        ref={sheetRef}
        snapPoints={[650, 780, 700]}
        renderContent={renderContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C365A'
  },
  title: {
    fontSize: 14,
    marginLeft: '5%',
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  subtitle: {
    marginLeft: '5%',
    color: '#25345F',
    fontWeight: 'normal',
    fontSize: 13,
  },
  hidecard: {
    position: 'relative', right: -25, top: -5, color: '#01D167', fontWeight: '900', fontSize: 12, alignSelf: 'center', width: 151
  }
});
