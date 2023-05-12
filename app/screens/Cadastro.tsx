import { addDoc, collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FIRESTORE_DB } from '../../firebaseConfig';

const Cadastro = ({ navigation }: any) => {

    const [tarefa, setTarefa] = useState('');

    const addTarefa = async () => {
        const doc = addDoc(collection(FIRESTORE_DB, 'Tarefas'), { title: tarefa, done: false });
        setTarefa('');
        alert("Tarefa cadastrada!");
    }
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Informe a tarefa"
                onChangeText={(t: string) => setTarefa(t)}
                value={tarefa}
                style={styles.input}
            />
            <Button
                onPress={() => addTarefa()}
                title="Adicionar Tarefa"
                disabled={tarefa === ''}
            />
            <Button
                title="Listagem"
                onPress={() => navigation.navigate('Lista')}
            />
        </View>
    );
}

export default Cadastro;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    input:{
        height: 40,
        padding: 20,
        fontSize: 16,
        color: '#000',
        backgroundColor: '#EEE',
        marginVertical: 30
    },
    btnAdd:{
        
    }
});