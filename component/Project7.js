import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

const style = StyleSheet.create({
    container:{
        padding:20
    },
    label:{
        fontWeight:"bold",
        fontSize:18,
    },
    input: {
        marginTop:10,
        backgroundColor: "rgba(0,0,0,0.1)",
        padding: 10,
        borderRadius:5,
    },
});

const Project7 =() =>{
    const [name, setName]= useState("");
    
    return (
        <View style={style.container}>
             <Text style={style.label}>What is your name?</Text>
             <TextInput style={style.input}
             placeholder="John Doe"
             placeholderTextColor="rgba(0,0,0,0.5)"
             onChangeText={(text)=>setName(text)}
             value={name}
             />
             <Button 
             title="Say Hello" 
             onPress={() =>{
                alert(`Hello, ${name}!`);
                setName("");
             }}></Button>
        </View>
       
    )
}

export default Project7;