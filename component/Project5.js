import { StyleSheet, Text, View } from "react-native";
import babelConfig from "../babel.config";

const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        flexDirection:"row",
        justifyContent: "space-around",
    },
    box:{
        width:100,
        height:100,
        justifyContent:"center",
        alignItems:"center",
    },
});

const Square = ({text, bgColor = "#7ce0f9"}) =>(
<View style={[style.box,{backgroundColor: bgColor}]}>
    <Text>{text}</Text>
</View>
);


const Project5 = () =>{
    return(
        <View style={style.container}>
            <Square text="Square 1"/>
            <Square text="Squrre 2" bgColor="#4dc2c2"/>
            <Square text="Squrre 3" bgColor="#ff637c"/>
        </View>
    )

}


export default Project5;