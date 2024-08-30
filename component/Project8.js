import { FlatList, Text, View } from "react-native"

const DATA=[
    {
        id:1,
        lastName: "Teo",
        firstName: "Tran Van"
    },
    {
        id:2,
        lastName: "Toan",
        firstName: "Tran Van"
    },
    {
        id:3,
        lastName: "Tung",
        firstName: "Tran Van"
    },
    {
        id:4,
        lastName: "Tuan",
        firstName: "Tran Van"
    },
    {
        id:5,
        lastName: "Tuan",
        firstName: "Tran Van"
    },
    {
        id:6,
        lastName: "Tuan",
        firstName: "Tran Van"
    },
    {
        id:7,
        lastName: "Tuan",
        firstName: "Tran Van"
    },
    {
        id:8,
        lastName: "Tuan",
        firstName: "Tran Van"
    },
    {
        id:9,
        lastName: "Tuan",
        firstName: "Tran Van"
    },
    {
        id:10,
        lastName: "Tuan",
        firstName: "Tran Van"
    },
    {
        id:11,
        lastName: "Tuan",
        firstName: "Tran Van"
    },
    {
        id:12,
        lastName: "Tuan",
        firstName: "Tran Van"
    },
    {
        id:13,
        lastName: "Tuan",
        firstName: "Tran Van"
    },
    {
        id:14,
        lastName: "Tuan",
        firstName: "Tran Van"
    },
]

const renderItem = ({item})=>{
    console.log(item)
    return(
        <View style={
            {
                padding:10,
                backgroundColor:"yellow",
                justifyContent:"center",
                borderTopWidth: 0.5,
                borderBottomWidth: 0.5
            }
            }>
            <Text>{item.firstName + " "+ item.lastName}</Text>
        </View>
    )

}

const Project8 = ()=>{
    return(
        <FlatList data={DATA}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        />
    )
}

export default Project8;