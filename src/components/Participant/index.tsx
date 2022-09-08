import { View, Text, TouchableOpacity } from 'react-native'

import { FontAwesome5 } from '@expo/vector-icons'

import { styles } from './styles'

type Props = {
  name: string
  onRemove: () => void
}

export function Participant({
  name,
  onRemove
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {name}
      </Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={onRemove}
      >
        <FontAwesome5 
          color="#fff"
          name="minus-circle"
          size={20}
        />
      </TouchableOpacity>
    </View>
  )
}