// app/components/ProductCard.tsx
import React from "react";
import { View, Text, Image, Pressable } from "react-native";

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const ProductCard: React.FC<Product> = ({ product }) => {
  return (
    <View className="mr-4 p-2">
      <Image
        source={{ uri: product.imageUrl }}
        className="w-32 h-32 rounded-md"
      />
      <Text className="text-sm mt-2">{product.name}</Text>
      <Text className="text-sm text-gray-500">Rp {product.price}</Text>
      <Pressable className="absolute top-2 right-3 opacity-60 active:opacity-100">
        <Text className="text-lg">♥</Text>
      </Pressable>
      {/* <Pressable className="absolute bottom-2 right-3 opacity-60 active:opacity-100">
        <Text className="text-sm">🛒</Text>
      </Pressable> */}
    </View>
  );
};

export default ProductCard;
