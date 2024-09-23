import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView } from 'react-native';
import Header from './components/Header';
import CategoryButton from './components/CategoryButtons';
import Products from './components/ProductGrid';
import TopCategories from './components/TopCategories';

export default function App() {
  return (
    <View >
      <ScrollView>
        <Header />
        <CategoryButton />
        <Products />
        <TopCategories />
      </ScrollView>
    </View>
  );
}
