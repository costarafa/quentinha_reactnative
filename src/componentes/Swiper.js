import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Swiper  from 'react-native-swiper';

export default function SwiperComponent(){
    return(
        <Swiper
        style={style.wrapper}
        dotStyle={{
            backgroundColor: '#000',
            borderColor: '#000',
            borderWidth: 1,
            width: 10,
            height: 10,
            borderRadius: 10
        }}
        activeDotColor="#FFF"
        activeDotStyle={{
            borderColor: '#000',
            borderWidth: 1,
            width: 10,
            height:10,
            borderRadius: 10
        }}
        >
            <View style={styles.slide}>
                <Image
                source={require('assets/marmitinha1.jpg')}
                style={{width: '100%', height: 400}}
                />
            </View>

            <View style={styles.slide}>
                <Image
                source={require('assets/marmitinha2.jpg')}
                style={{width: '100%', height: 400}}
                />
            </View>

            <View style={styles.slide}>
                <Image
                source={require('assets/marmitinha3.jpg')}
                style={{width: '100%', height: 400}}
                />
            </View>
        </Swiper>
    );
}

const styles = StyleSheet.create({
    wrapper:{

    },
    slide:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
})