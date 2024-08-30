import { StyleSheet, Text, View } from "react-native"

const Project1 = () =>{
    return (
        <View style={myStyle.box}>
            <Text style={myStyle.TextStyle}>Hello World</Text>
        </View>
    )
}

export default Project1;
const myStyle = StyleSheet.create(
    {
      box: {
        height:100,
        width:100,
        alignItems: "center",
        justifyContent:"center",
        backgroundColor: "aqua"
      },
      TextStyle: {
        color:"black"
      }
    }
  )