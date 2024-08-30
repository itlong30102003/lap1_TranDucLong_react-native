import { useState } from "react"
import { Button, StyleSheet, Text, View } from "react-native"

const Cat=(props)=>{
    const [isHungry, setIsHungry] = useState(true)





    return(
        <View>
            <Text>Hello, My name is {props.name}, I am {{isHungry}? "Hungry" : "full"}</Text>
            <Button
                title="Pour me for milk"
                onPress={()=> setIsHungry(false)}
            />
        </View>
    )
}



const pi=3.14
const f1=(x)=>{
    return Math.sqrt(x)
}

export {pi, f1,MyStyle}
export default Cat

const MyStyle = StyleSheet.create(
    {
        container : {
            backgroundColor: 'white',
            justifyContent: "center",
            alignItems: "center", flex:1,
            padding:30
        }
    }
)