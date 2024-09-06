import { useState } from "react"
import { Button, ImageBackground, StyleSheet, Text, TextInput, View } from "react-native";
import { Checkbox } from "react-native-paper";

const Login = () =>{
    const [inputUsername, setInputUsername] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    const [checked, setChecked] = useState(false);

    const handleLogin = () => {
        // Thêm logic kiểm tra username và password tại đây
        if (inputUsername === "" || inputPassword === "") {
            setErrorMessage("Username và Password không được để trống");
        } else {
            // Gửi thông tin đăng nhập
            console.log("Username:", inputUsername);
            console.log("Password:", inputPassword);
            setErrorMessage(""); // Xóa thông báo lỗi nếu nhập hợp lệ
        }
    };
    
    return(
        <View style={myStyle.container}>
            <ImageBackground>
                <Text style={myStyle.title}>Sign In</Text>

                <TextInput
                    style={myStyle.input}
                    placeholder="Username"r
                    value={inputUsername}
                    onChangeText={setInputUsername}
                />

                <TextInput
                    style={myStyle.input}
                    placeholder="Password"
                    value={inputPassword}
                    onChangeText={setInputPassword}
                    secureTextEntry={true}
                />
                <Checkbox
                    status={checked ? 'checked':'unchecked'}    
                    onPress={() => {
                        setChecked(true);
                    }}
                />
                <Button title="Login" onPress={handleLogin} />

            </ImageBackground>
            <View style={myStyle.FormLogin}>

             
            </View>
        </View>
    )
}

export default Login;

const myStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"black",
        justifyContent: "center",
        alignItems: "center",
    },
    
    FormLogin: {
        width: "80%",
        padding: 20,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderRadius: 10,
    },
    title: {
        fontSize: 24,
        color:"black",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: "black",
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    error: {
        color: "red",
        marginBottom: 20,
        textAlign: "center",
    },
});