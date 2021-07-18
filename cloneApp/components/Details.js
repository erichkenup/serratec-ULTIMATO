import React from "react"
import {View, Button} from 'react-native';

const Details = ({navigation}) =>{

    return(
        <View>
            <Button title="Home" onPress={() => {navigation.navigate("Home")}}/>
            <Button title="Gartic" onPress={() => {navigation.navigate("Gartic")}}/>   
        </View>
    )
}

export default Details