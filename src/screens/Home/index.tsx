import { Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons'

import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home() {

  const participants = ['Lucas', 'Diego', 'Rodrigo', 'Dani', 'Wagner', 'Guilherme', 'Jaq', 'Mikão', 'Chris', 'Hamilton']

  function handleParticipantAdd() {}

  function handleParticipantRemove() {}

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
        data={[]}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant 
            key={item}
            name={item}
            onRemove={handleParticipantRemove}
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