import React, { Component } from "react";
import {
    View,
    Text,    
    Image
} from "react-native";

class Category extends Component {
    render() {
        return (
            <View style={{marginLeft: 50}}>
                <View >
                    <Image source={this.props.imageUri}
                        style={{borderWidth: 4,borderColor: 'white',borderRadius: 100,flex: 1, width: 180, height: 180, resizeMode: 'cover' }}
                    />
                </View>
                <View style={{paddingTop: 10 }}>
                    <Text style ={{textAlign: "center",fontWeight: "bold", color: "white", marginTop: 10, fontSize: 24,}}>{this.props.name}</Text>
                </View>
            </View>
        );
    }
}

export default Category;