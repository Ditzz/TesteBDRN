import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import data from './data';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH * 0.8;

type Props = {
    item: {
        body: string,
        title: string,
        imgUrl: string
    },
    index: number
}

const carouselCardItem = ({ item, index }: Props) => {
    return (
        <View key={index} style={styles.cardCarousel}>
            <Image source={{ uri: item.imgUrl }} style={styles.image}/>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.body}>{item.body}</Text>
        </View>
    );
}

const CarouselCards = () => {
    return (
        <View style={styles.container}>
            <Carousel
                data={data}
                renderItem={carouselCardItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                useScrollView={true}
            />

        </View>
    );
}

export default CarouselCards;

const styles = StyleSheet.create({
container:{
    flex: 1,
    backgroundColor: "#FFF"
},
cardCarousel: {
    paddingTop: 50,
    width: ITEM_WIDTH
},
image:{
    height: 300,
    borderRadius: 10,
    resizeMode: 'cover'
},
title: {
    padding: 5,
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center'
},
body:{
    fontSize: 15,
    alignSelf: 'center'
}
});