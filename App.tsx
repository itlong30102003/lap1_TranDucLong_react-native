import { StyleSheet, View } from "react-native"
import Project1 from "./component/Project1";
import Project2 from "./component/Project2";
import Project3 from "./component/Project3";
import Project4 from "./component/Project4";
import Project5 from "./component/Project5";
import Project6 from "./component/Project6";
import Project7 from "./component/Project7";
import Project8 from "./component/Project8";
const App = ()=>{
  return(
    <View style={myStyle.container}>
      {/* <Project1/>    */}
      {/* <Project2/> */}
      {/* <Project3/> */}
      {/* <Project4/> */}
      {/* <Project5/> */}
      {/* <Project6/> */}
      {/* <Project7/> */}
      {/* <Project8/> */}
    </View>
  )
}
export default App;

const myStyle = StyleSheet.create(
  {
    container:{
      flex:1
    }
  }
)