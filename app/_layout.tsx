import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import "./globals.css";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" />
    </Stack>
  );
}

const styles = StyleSheet.create({});
