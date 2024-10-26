// UserList.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { api } from './api'; // Ajuste o caminho conforme necessário

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get('/users'); // Endpoint para buscar usuários
        setUsers(response.data); // Supondo que a resposta seja um array de usuários
      } catch (err) {
        setError('Erro ao buscar usuários');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()} // Altere conforme necessário
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text> {/* Altere 'name' para a propriedade correta */}
          </View>
        )}
      />
    </View>
  );
};

export default UserList;
