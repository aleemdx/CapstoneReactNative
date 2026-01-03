import { FC } from 'react';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
// Screens
import Navigator from './navigations';
// Themes
import { theme } from './theme/index';
import { commonStyles } from './theme/commonStyle';
import { AuthContextProvider } from 'contexts/Auth';
import navigationTheme from './theme/navigation';

const App: FC = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={navigationTheme}>
        <SafeAreaView style={[commonStyles.flex1]}>
          <AuthContextProvider>
            <Navigator />
          </AuthContextProvider>
        </SafeAreaView>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
