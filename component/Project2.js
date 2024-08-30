import {Button, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const Project2 = () => {
    return (
        <View style={myStyle.container}>
            <Button title="Button 1" onPress={() => alert("Hello 1")}/>
            <TouchableOpacity style={myStyle.button} onPress={() => alert("Hello 2")}>
                <Text style={myStyle.text}>
                    Button 2
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Project2;

const myStyle = StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:"center"
        },
        button: {
            backgroundColor: "blue",
            marginTop:10,
            alignItems:"center",
            padding:10
        },
        text:{
            color:"white",
            fontSize: 18
        }
    }
)