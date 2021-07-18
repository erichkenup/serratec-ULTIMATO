import React, {useState} from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native'

export default function(){

    const [nome,setNome]=useState("Quem é você?")

    const mudarNome=()=>{}

    

    return(
        <View>
            
            <TextInput
                style={styles.caixa} 
                placeholder="Quem é você?"  
                onChangeText={(text)=>setNome(text)}
                autoCapitalize="characters"
                
            />
            <Text>
                {nome}
            </Text>
        </View>

    )
}

const styles = StyleSheet.create({
    
    caixa:{
        borderBottomWidth:1,
        borderBottomColor:"white",
        marginHorizontal:50
    }
})