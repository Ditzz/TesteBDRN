import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { collection, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../firebaseConfig';
import { firestore } from 'react-native-firebase';

const Alterar = ({ route }: any) => {
    const id = route.params?.id;
    const [title, setTitle] = useState('ghgfhgf');
    const [done, setDone] = useState('false');


    useEffect(() => {
        const TarefasRef = collection(FIRESTORE_DB, 'Tarefas');

        const subscriber = onSnapshot(TarefasRef, {
            next: (snapshot) => {
                const tarefas: any[] = [];
                snapshot.docs.forEach(doc => {
                    if (doc.id === id) {
                        tarefas.push({
                            id: doc.id,
                            ...doc.data(),
                        })
                    }
                })
                setTitle(tarefas[0].title);
                setDone(tarefas[0].done);
            }
        })
        return () => subscriber();
    }, []);

    return (
        <View>
            <View>
                <TextInput
                    value={title}
                    onChangeText={(t) => setTitle(t)}
                />
                <TextInput value={done}
                    onChangeText={(t) => setDone(t)}
                />
                <Button
                    title="Alterar"
                />
            </View>
        </View>
    );
}

export default Alterar;