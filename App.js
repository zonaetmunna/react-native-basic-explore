import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/home/Home';
import { NativeRouter, Route, Link } from "react-router-native";
import Products from './components/products/Products';

export default function App() {
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      {/* routing */}
      <NativeRouter>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/Products" element={<Products></Products>}></Route>
      </NativeRouter>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
