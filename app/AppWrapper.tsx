import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import { TaskRealmContext } from "./models";
import colors from "./styles/colors";
import { App } from "./App";

export const AppWrapper = () => {
  console.log(`AppWrapper`);

  const { RealmProvider } = TaskRealmContext;

  return (
    <SafeAreaView style={styles.screen}>
      <RealmProvider>
        <App />
      </RealmProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
});
