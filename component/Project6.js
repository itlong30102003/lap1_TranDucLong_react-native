import { ScrollView, StyleSheet, Text, View } from "react-native";

const style = StyleSheet.create({
    container:{backgroundColor: "#fff"},
    box:{
        width:100,
        height:100,
        justifyContent:"center",
        alignItems:'center',
        margin:20
    },
});

const Square = ({text, bgColor = "#7ce0f9"}) =>(
    <View style={[style.box,{backgroundColor: bgColor}]}>
        <Text>{text}</Text>
    </View>
);

const data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

export default () => {
    return (
        <ScrollView style={style.container}>
            {data.map((item, index) => (
                <Square key={item} text={`Square ${index +1}`}/>
        ))}
        </ScrollView>
    )
}