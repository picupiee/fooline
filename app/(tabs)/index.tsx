import { FlatList, RefreshControl, ScrollView, Text, View } from "react-native";
import HeroSection from "../components/HeroSection";
import FeaturedProducts from "../components/FeaturedProducts";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import ProductList from "../components/ProductList";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useCallback, useState } from "react";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const route = useRouter();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      route.replace("/");
    }, 2000);
  }, []);

  return (
    <SafeAreaProvider>
      <ScrollView
        className="flex-1 bg-white"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* Components */}
        <HeroSection />
        <FeaturedProducts />
        <SearchBar />
        <Categories />
        <ProductList />
      </ScrollView>
    </SafeAreaProvider>
  );
}
