
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      </View>
    </SafeAreaProvider>
  );
}

