import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { collection, doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../firebaseConfig';


const Alterar = ({ route }: any) => {
    const { id } = route.params;
    const [tarefa, setTarefa] = useState<any>({});

    const fetchTarefa = async () => {
        const colecao = doc(FIRESTORE_DB, 'Tarefas', id);
        const colecaoSnapshot = await getDoc(colecao);
        if (colecaoSnapshot.exists()) {
            setTarefa({
                id: colecaoSnapshot.id,
                ...colecaoSnapshot.data()
            });
        }

    }

    useEffect(() => {
        fetchTarefa();
    }, []);

    const handleAtualizaTexto = (key: string, t: string) => {
        setTarefa({
            ...tarefa,
            [key]: t
        });
    }

    const handleUpdateTarefa = async () => {
        const colecao = doc(FIRESTORE_DB, 'Tarefas', id);
        await updateDoc(colecao, tarefa);
    }


    return (
        <View>
            <View>
                <TextInput
                    value={tarefa.title}
                    onChangeText={(t) => handleAtualizaTexto('title', t)}
                />
                <TextInput value={tarefa.done}
                    onChangeText={(t) => handleAtualizaTexto('done', t)}
                />
                <Button
                    title="Alterar"
                    onPress={handleUpdateTarefa}
                />
            </View>
        </View>
    );
}

export default Alterar;