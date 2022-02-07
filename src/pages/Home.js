import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import {Feather} from 'expo/vector-icons';
import {useNavigation} from '@react-navigation/native';


export default function Home(){
    const navigation = useNavigation();

    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: '#FFF'}}
        >

            <View style={styles.header}>
                <View style={styles.inputArea}>
                    <Feather name= "search" size={24} color= "black"/>
                    <TextInput
                    placeholder= "Qual marmitinha você deseja?"
                    style={styles.input}
                    />
                </View>
            </View>

            <View style= {styles.contentNew}>
                <Text style= {styles.title}>Novos sabores</Text>
            </View>

            <ScrollView 
                horizontal showsHorizontalScrollIndicator={false} 
                style={{paddingHorizontal: 15, }}>
                    <New
                    cover= {require('../assets/marmitinha1.jpg')}
                    name= "Strogonnof de Carne"
                    description="Strogonnof de Carne, arroz, e batata palha."
                    onPress={() => navigation.navigate('detail')}
                    />

                    <New
                    cover= {require('../assets/marmitinha2.jpg')}
                    name= "Strogonnof de Frango"
                    description="Strogonnof de Frango arroz, e batata palha."
                    onPress={() => navigation.navigate('detail')}
                    />

                    <New
                    cover= {require('../assets/marmitinha3.jpg')}
                    name= "Feijoada"
                    description="Feijoada, arroz, farofinha e salada de couve-folha."
                    onPress={() => navigation.navigate('detail')}
                    />

            </ScrollView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    header:{
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 20,
    },
    inputArea:{
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        width: '98%',
        backgroundColor: '#FFF',
        elevation: 2,
        paddingHorizontal: 10,
        height: 37,
        borderRadius: 10,
    },
    input:{
        fontFamily: 'Montserrat_500Medium',
        paddingHorizontal: 10,
        fontSize: 13,
        width: '90%'
    },
    contentNew:{
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
    },
    title:{
        paddingHorizontal: 15,
        fontFamily: 'Montserrat_700Bold',
        fontSize: 18,
        color: '#4f4a4a'
    }

});