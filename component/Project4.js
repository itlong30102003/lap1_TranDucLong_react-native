import { useState } from "react"
import { Button, Text, View } from "react-native";

const Project4 = () =>{
    const [pressCount, setPressCount] = useState(0);

    return (
     <View style={{alignItems:"center", marginTop:20}}>
        <Text>You've pressed the button: {pressCount} time(s)</Text>
        <Button
            title={`Pressed ${pressCount} time(s)`}
            onPress={() => setPressCount(pressCount + 1)}>
        </Button>
     </View>   
    );
};
export default Project4;