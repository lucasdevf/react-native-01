import { useState } from 'react';

import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons'

import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home() {

  const [participants, setParticipants] = useState<string[]>([])

  const [participantName, setParticipantName] = useState('')

  function handleParticipantAdd() {
    if(participants.includes(participantName)) {
      return Alert.alert('Participante já existente', 'Já existe um participante na lista com esse nome')
    }
    
    setParticipants(prevState => [...prevState, participantName])
    setParticipantName('')
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover participante', `Deseja realmente remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Udi Events
      </Text>
      
      <Text style={styles.eventDate}>
        Sexta, 16 de Setembro de 2022
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName}
          value={participantName}
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

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant 
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes à sua lista de presença.
          </Text>
        )}
      />
      
    </View>
  );
}