import { StyleSheet, Button, Image, Switch } from 'react-native';
import * as React from 'react';
import { useEffect, useState } from 'react';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import BottomSheet from 'reanimated-bottom-sheet';
import { Header } from '../containers/Header';
import { DebitCard } from '../containers/DebitCard';
import { CardOptions } from '../containers/CardOptions';


export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  useEffect(() => {
    sheetRef.current.snapTo(0);
  });

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const renderContent = () => (
    <View
      style={{
        backgroundColor: '#FFFFFF',
        padding: 25,
        height: 1050
      }}>
      <DebitCard />
      <CardOptions />
    </View>
  );

  const sheetRef = React.useRef(null);

  return (
    <View style={styles.container}>

      <Header />

      <BottomSheet
        ref={sheetRef}
        snapPoints={[600, 800, 300]}
        borderRadius={25}
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
  }
});
