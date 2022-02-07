import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function House({cover}){
    return(
        <View style= {StyleSheet.container}>
            <View>
                <Image
                    sourcce={cover}
                    style={StyleSheet.cover}
                />
            </View>

            <View style={StyleSheet.content}>
                <Text style={StyleSheet.description}>
                    A melhor marmitinha de almoço ou janta!!
                </Text>
                <Text style={StyleSheet.price}> 
                    R$ 10,00
                </Text>

            </View>
        </View>
    );
}

const styles= StyleSheet.create({
    conatiner:{
        flexDirection: 'row',
        width: 260,
        height: 70,
        backgroundColor: '#FFF',
        elevation: 2,
        padding: 6,
        marginVertical: 5,
        marginRight: 20,
        marginLeft: 2,
        borderRadius: 10,
    },
    cover:{
        borderRadius: 10,
        width: 60,
        height: 60
    },
    content: {
        width: '65%',
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        height: '100%'
    },
    description:{
        fontSize: 9,
        fontFamily: 'Montserrat_500Medium'
    },
    price:{
        fontSize: 12,
        fontFamily: 'Montserrat_700Bold'
    }
});