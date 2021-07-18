import React from "react"
import {Button, View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimension} from 'react-native';
    import Icon from 'react-native-vector-icons/Ionicons'
    import Category from "./Category"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Home = ({navigation}) =>{
    return(
        <View>
            <Button title="Details" onPress={() => {navigation.navigate("Details")}}/>            
        </View>
    )
}

export default Home