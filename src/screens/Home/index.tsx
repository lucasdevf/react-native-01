import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons'

import { styles } from './styles';

export function Home() {

  function handleParticipantAdd() {
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>
      
      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity 
          style={styles.button}
          onPress={handleParticipantAdd}
        >
          <FontAwesome5 
            color="#fff"
            name="plus-circle"
            size={20}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}