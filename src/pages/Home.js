import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler'

export default function Home(){
    const navigation = useNavigation();

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{backgroundColor: '#FFF'}}
        />

            <View style={styles.header}>
                <View style={styles.inputArea}>
                    <Feather name= "search" size={24} color= "black"/>
                    <TextInput
                    placeholder= "O que está procurando?"
                    style={styles.input}
                    />
                </View>
            </View>

            <View style= {styles.contentNew}>
                <Text style= {styles.title}>Novos sabores</Text>
            </View>

            <ScrollView 
                horizontal showsHorizontalScrollIndicator={false} 
                style={{paddingHorizontal: 15, }}
            />

);


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
    }
});