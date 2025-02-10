import React, { useState } from 'react';
import { Switch, StyleSheet, Image, Text } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.container, isEnabled && styles.yellowBackground]}>
        <Text style={styles.statusText}>{isEnabled ? 'Lights On' : 'Lights Off'}</Text>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: isEnabled
              ? 'https://cdn-icons-png.flaticon.com/512/32/32299.png'
              : 'https://cdn-icons-png.freepik.com/512/4736/4736954.png?ga=GA1.1.344886181.1739160720'
          }}
        />
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  yellowBackground: {
    backgroundColor: 'yellow',
  },
  tinyLogo: {
    width: 200,
    height: 300,
  },
  statusText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;
