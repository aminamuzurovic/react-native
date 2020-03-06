import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, FlatList, Image} from 'react-native'
import config from '../api/config'

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await config.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, [])

    if(!result) {
        return null;
    }
    return(
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => {photo}}
                renderItem={({item})=>{
                    return(
                        <Image style={styles.image} source={{uri:item}}/>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        height:300,
        width:400,
        margin: 10
    }
})

export default ResultsShowScreen;