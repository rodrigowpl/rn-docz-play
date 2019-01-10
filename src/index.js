import React from 'react'
import { View } from 'react-native'

import { Button } from './button'

const Main = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
    <Button
      label='Click me!'
    />
  </View>
)

export default Main
