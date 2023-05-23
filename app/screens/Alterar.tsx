import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../firebaseConfig';
import { TouchableOpacity } from 'react-native';
import { faMugSaucer, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


const Alterar = ({ navigation, route }: any) => {
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

    useEffect(() => { fetchTarefa() }, []);

    const handleAtualizaTexto = (key: string, t: string) => {
        setTarefa({
            ...tarefa,
            [key]: t
        });
    }

    const handleUpdateTarefa = async () => {
        const colecao = doc(FIRESTORE_DB, 'Tarefas', id);
        await updateDoc(colecao, tarefa);
        alert("Dados alterado com sucesso!");
        navigation.navigate('Lista');
    }


    return (
        <View>
            <View>
                <TextInput
                    style={styles.input}
                    value={tarefa.title}
                    onChangeText={(t) => handleAtualizaTexto('title', t)}
                />
                <TextInput
                    style={styles.input}
                    value={tarefa.done}
                    onChangeText={(t) => handleAtualizaTexto('done', t)}
                />
                <TouchableOpacity
                    style={styles.alterar}
                    onPress={handleUpdateTarefa}
                >
                    <FontAwesomeIcon style={styles.textoBotao} icon={faPencil} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Alterar;

const styles = StyleSheet.create({
    input: {
        height: 40,
        marginVertical: 10,
        marginHorizontal: 30,
        fontSize: 20,
        borderColor: "#AAA",
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
    },
    alterar: {
        backgroundColor: '#46F',
        height: 40,
        marginVertical: 10,
        alignItems: 'center',
        marginHorizontal: 30,
        justifyContent: 'center',
        borderRadius: 5,
    },
    textoBotao: {
        color: '#FFF',
        fontWeight: 'bold'
    },
});