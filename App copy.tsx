// import { Alert, Image, ImageBackground, StyleSheet, Switch, Text, TextInput, TouchableHighlight, View } from "react-native"
// import Project1 from "./component/Project1";
// import Project2 from "./component/Project2";
// import Project3 from "./component/Project3";
// import Project4 from "./component/Project4";
// import Project5 from "./component/Project5";
// import Project6 from "./component/Project6";
// import Project7 from "./component/Project7";
// import Project8 from "./component/Project8";
// import { useState } from "react";
// const App = ()=>{
//   // const [userName, setUserName] = useState("")
//   const [count, setCount] = useState(0)
//   const onPress =()=>{
//     setCount(count+1)
//   }

//   // const DATA =[
//   //  {
//   //   id :"1",
//   //   title:'first item'
//   //  },
//   //  {
//   //   id :"2",
//   //   title:'second item'
//   //  },
//   //  {
//   //   id :"3",
//   //   title:'third item'
//   //  }
    
//   // ]
//   return(
//     <View style={myStyle.container}>
//       {/* <Project1/> */}
//       {/* <Project2/> */}
//       {/* <Project3/> */}
//       {/* <Project4/> */}
//       {/* <Project5/> */}
//       {/* <Project6/> */}
//       {/* <Project7/> */}
//       {/* <Project8/> */}
//       {/* <View style={{...myStyle.box, backgroundColor:"red", alignSelf:"flex-start"}}>
        
//       </View>
//       <View style={{...myStyle.box, backgroundColor:"blue"}}>

//       </View>
//       <View style={{...myStyle.box, backgroundColor:"green", alignSelf:"flex-end"}}>

//       </View> */}
//       {/* <Text style={{
//         color:"red",
//         fontSize:30,
//         fontWeight: "bold",
//         }}
//         ellipsizeMode="middle"
//         numberOfLines={2}
//         onPress={() => Alert.alert("Hello")}
//         >Hellooooooooooooooooooooooooooooooooooooooooooo
//         oooooooooooooooooooooooo {"\n"}
//         oooooooooooooooooooooooooooooooooooooooooooo </Text> */}

//         {/* <TextInput 
//         style={{
//           height:50,
//           backgroundColor:"white",
//           width:"100%",
//           borderColor:"blue",
//           borderWidth:1,
//           fontSize:30
//         }}
//         placeholder="Input your name"
//         // keyboardType="number-pad"
//         // onChangeText={(text)=> setUserName(text)}
//         onChangeText={setUserName}
//         value={userName}
//         secureTextEntry={true}
//         /> */}

//     {/* <Image style={{height:300}} source={require('./image/image1.png')} resizeMode="contain"/> */}
    
//           {/* <ImageBackground
//             style={{flex:1}}
//             source={require('./image/image1.png')}>
//           </ImageBackground> */}


//     {/* <Image style={{height:300, width:100}} source={{
//           uri:'data:image/png;base64,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',
//         }} 
//         resizeMode="contain"/> */}

//       {/* <Switch 
//           value/> */}

//           {/* <Text> Count: {count}</Text>
//           <TouchableHighlight style={myStyle.button} onPress={onPress}>
//             <Text> Press me</Text>
//           </TouchableHighlight> */}

          
//     </View>
//   )
// }
// export default App;

// const myStyle = StyleSheet.create(
//   {
//     button:{
//       height:50,
//       width:"95%",
//       borderRadius:95,
//       alignItems:"center",
//       justifyContent:"center",
//       backgroundColor:"aqua"
//     },
//     box: {
//       height:100,
//       width:100,
//       margin:1
//     },
//     container:{
//       flex:1,
//       backgroundColor:"white",
//       justifyContent:"center",
//       alignItems:"center"
//     }

//   }
// )