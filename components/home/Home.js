import { View, Text } from 'react-native'
import React from 'react'
import Products from '../products/Products'
import {Link} from 'react-router-native';

const Home = () => {
  return (
    <View>
      <Link to="/home">home</Link>
      <Link to="/products">products</Link>
    </View>
  )
}

export default Home