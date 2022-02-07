import React from "react";
import {View, Text, Image, TouchableOpacity, StylesSheet} from 'react-native';
import {Feather, Ionicons} from '@expo/vector-icons';
import {ScrollView} from 'react-native-gesture-handler';
import Stars from 'react-native-stars';

import SwiperComponent from '../componentes/Swiper';

export default function Detalhes(){
    return (
        <View style= {styles.container}>
            <View style={styles.swiperContent}>
                <SwiperComponent/>
            </View>

            <View style={styles.headerContent}>
                <View style={{width: '65%'}}>
                    <Text style={styles.marmitinha}> Marmitinha</Text>    
                </View> 

            </View>
        </View>
    );
}