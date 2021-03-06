import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import GameScreen from './src/screens/Game';
import HomeScreen from './src/screens/Home';
import SelectPlayersScreen from './src/screens/SelectPlayers';
import { GameProvider } from './src/contexts/GameContext';
import RootNativeStackParamsList from './src/types/RootNativeStackParamsList';
import colors from './src/styles/colors';

const NativeStack = createNativeStackNavigator<RootNativeStackParamsList>();

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor={colors.statusBar} />

      <NavigationContainer>
        <GameProvider>
          <NativeStack.Navigator screenOptions={{
            headerShown: false,
            animation: 'fade'
          }}>
            <NativeStack.Screen name='SelectPlayers' component={SelectPlayersScreen} />
            <NativeStack.Screen name='Home' component={HomeScreen} />
            <NativeStack.Screen name='Game' component={GameScreen} />
          </NativeStack.Navigator>
        </GameProvider>
      </NavigationContainer>
    </>
  );
}
